import template from './header.html';
import styles from './header.scss';

export default {
  template,
  controller: function(){
    this.styles = styles;
  }
};
