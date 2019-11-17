<template lang="pug">
  .contact
    .l-container
      .contact__title
        h3 Сделать заказ <br> или получить консультацию
        p.mt-3.text-primary-l-2.font-size-16 Работаем со всеми регионами

      .l-row.contact__row
        .contact__form
          .input-group
            input(type="text" placeholder="Имя" v-model="name.value" name='name')
            .input-group__hint.danger(v-if="name.alert" v-text="name.alert")

          .input-group
            input(type="text" placeholder="E-mail" name='email' v-model="email.value")
            .input-group__hint.danger(v-if="email.alert" v-text="email.alert")

          .input-group
            input(type="text" placeholder="Телефон" v-model="phone.value" name='phone')
            .input-group__hint.danger(v-if="phone.alert" v-text="phone.alert")

          .input-group
            textarea(placeholder="Сообщение" v-model="message.value")
            .input-group__hint Необязательно

          label.mt-6.d-block
            input(type="checkbox" v-model="agreement.value").mr-2
            span.font-size-14 Я ознакомился и согласен с <nuxt-link to="/policy" class="link link--underlined primary">политикой конфиденциальности</nuxt-link>
            .input-group__hint.danger(v-if="agreement.alert" v-text="agreement.alert")

          a.btn.mt-12(v-if="!result" @click='sendMail') Отправить
          p.message.mt-8(v-text="result" v-else)

        .contact__info
          a(href="tel:+7 (800) 201-52-31" target="_blank").link +7 (800) 201-52-31
          a(href="mailto:info@seaplastcon.com" target="_blank").link.mt-8.mb-11.mb-6-sm.mt-4-sm info@seaplastcon.com
          p.mt-4
            span.dash.dash--thin.text-primary-bg
            span г. Мурманск, ул. Володарского, 14а, оф. 6
          p.mt-4
            span.dash.dash--thin.text-primary-bg
            span г. Калининград, Гурьеский г.о., ул. Шатурская 1Б, стр. 18

</template>

<script>
export default {
  data() {
    return {
      name: {
        value: '',
        alert: ''
      },
      email: {
        value: '',
        alert: ''
      },
      phone: {
        value: '',
        alert: ''
      },
      message: {
        value: '',
        alert: ''
      },
      agreement: {
        value: false,
        alert: ''
      },
      result: ''
    }
  },
  methods: {
    sendMail() {
      let essentialMsg = 'Поле обязятельно для заполнения'
      let mailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
      let error = false

      // name
      if (this.name.value.length < 1) {
        this.name.alert = essentialMsg
        error = true
      } else {
        this.name.alert = ''
      }

      // email
      if (this.email.value.length < 1) {
        this.email.alert = essentialMsg
        error = true
      } else if (!mailRegExp.test(this.email.value)) {
        this.email.alert = 'Некорректный Email'
        error = true
      } else {
        this.email.alert = ''
      }

      // phone
      if (this.phone.value.length < 1) {
        this.phone.alert = essentialMsg
        error = true
      } else {
        this.phone.alert = ''
      }

      // agreement
      if (!this.agreement.value) {
        this.agreement.alert =
          'Необходимо подтвердить согласие с политикой конфиденциальности сайта'
        error = true
      } else {
        this.agreement.alert = ''
      }

      if (!error) {
        let bodyFormData = new FormData()
        bodyFormData.set('name', this.name.value)
        bodyFormData.set('email', this.email.value)
        bodyFormData.set('phone', this.phone.value)
        bodyFormData.set('message', this.message.value)

        this.result = 'Отправляется...'

        this.$axios({
          method: 'post',
          url: '/mail.php',
          data: bodyFormData,
          config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
          .then(res => {
            this.result = 'Сообщение успешно отправлено'
          })
          .catch(err => {
            this.result =
              'При отправке сообщения возникла ошибка. Свяжитесь с нами по почте info@seaplastcon.com'
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/modules/_contact-section.sass'
</style>
