import { createLayoutsWidget } from 'discourse/plugins/discourse-layouts/discourse/lib/layouts';
import { scheduleOnce } from "@ember/runloop";
import { h } from 'virtual-dom';

export default createLayoutsWidget('left-custom-html-two', {
  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_left_custom_html_two;

      const category = attrs.category;
      if (category && category.layouts_left_custom_html_two) {
        html = category.layouts_left_custom_html_two;
      }

      scheduleOnce('afterRender', this, function() {
        $("div.left-custom-html-two").append(`<div class='contents'>${html}</div>`);
      });
      //state.renderScheduled = true;
    }
    return h('div.left-custom-html-two');
  }
});
