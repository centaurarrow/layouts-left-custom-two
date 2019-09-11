import { createWidget } from 'discourse/widgets/widget';

export default createWidget('left-custom-html-two', {
  tagName: 'div.left-custom-html-two.widget-container',
  buildKey: () => 'left-custom-html-two',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('left-custom-html-two');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_left_custom_html_two;

      const category = attrs.category;
      if (category && category.layouts_left_custom_html_two) {
        html = category.layouts_left_custom_html_two;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.left-custom-html-two").html('');
        $("div.left-custom-html-two").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
