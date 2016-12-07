/**
 * アコーディオン機能
 * @param {number} speed スピード 
 * @param {string} easing イージング 
 * @param {function} callback コールバック関数
 */

function Accordion(speed,easing,callback) {
  this.$target = $(".acd");
  this.speed = speed || 500;
  this.easing = easing || 'easeOutQuart';
  this.callback = callback || null;
  this.init();
}

Accordion.prototype = {
  init : function(){
    this.setEl();
    this.bindEvent();
  },

  setEl : function(){
    this.$trigger = this.$target.find(".acd_btn");
  },

  bindEvent : function(){
    var _this = this;
    this.$trigger.on("click",function(e){
      _this.onClick(e);
    });
  },

  onClick : function(e){
    var $target = $(e.currentTarget);
    if(this.callback !== null){
      $target.next(".acd_body").stop().slideToggle(this.speed,this.easing,this.callback);
    }else{
      $target.next(".acd_body").stop().slideToggle(this.speed,this.easing);
    }
  }
};

module.exports = Accordion;
