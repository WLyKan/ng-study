import angular from 'angular'
import { PhoneService } from 'app/core/services/phone.service'
// import template from './phone-list.component.html'

angular.module('app').component('phoneList', {
  template: require('html-loader!./phone-list.component.html'),
  // templateUrl: require('./phone-list.component.html'), // template 也可以加载到
  controller: [
    'phone',
    function(phone: PhoneService) {
      this.$onInit = async () => {
        this.phones = await phone.getPhones()
      }
    },
  ],
})
