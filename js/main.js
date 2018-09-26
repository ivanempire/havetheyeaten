var app = new Vue({
	el: "#app",
	data: function() {
		return {
			showEaten: false
		}
	},
	methods: {
		prime: function() {
			this.showEaten = true;
			var timer = setTimeout(function() {
				this.showEaten = false;
				clearTimeout(timer);
			}.bind(this),4000)
		}
	}
});