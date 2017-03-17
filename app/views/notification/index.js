/**
 * @module storjshare/views/error
 */

'use strict';

module.exports = {
  props: ['notes', 'dismissAction'],
  created: function() {
    window.document.body.addEventListener('click', this.dismissAction, true);
  },
  destroyed: function() {
    window.document.body.removeEventListener('click', this.dismissAction, true);
  },
  template: `
<section class="notification" v-if="notes.length > 0" role="alert">
  <div class="note" v-for="note in notes">
    <span><strong v-if="note.name">{{note.name}}: </strong>{{note.message}}</span>
  </div>
</section>
  `
}
