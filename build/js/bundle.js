/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Accordion = __webpack_require__(1);

	(function(){
	  new Accordion();
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);