/**
 * this is a time slider for price count
 * @param  {[$]} $dom [target dom]
 * @param  {[obj]} $dom [target dom]
 * @return {[fun]}  options [options]
 */
(function($) {
	function TimeSlider($dom, options) {
		this._$dom = $dom;
		this._options = options;
	}
	TimeSlider.prototype.render = function() {
		var containerTemplate = ''
		+ '<div class="ti-slider-container">'
		+ '<div class="ti-slider-track-container">'
		+ '<div class="ti-slider-track-calc">'
		+ '<div class="ti-slider-bar-selection" style="width: calc(36.3636%); left: 0px;"></div>'
		+ '<div class="ti-slider-pointer ti-slider-pointer-min ui-draggable ui-draggable-handle" id="" style="display: none;">'
		+ '<div class="ti-slider-pointer-dot"></div>'
		+ '<div class="ti-slider-tip ti-slider-tip-top ti-slider-tip-min"></div>'
		+ '</div>'
		+ '<div class="ti-slider-pointer ti-slider-pointer-max ui-draggable ui-draggable-handle" id="" style="left: calc(36.3636%);">'
		+ '<div class="ti-slider-pointer-dot"></div>'
		+ '<div class="ti-slider-tip ti-slider-tip-top ti-slider-tip-max" style="display: block;">'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<ul class="ti-slider-ticks"/>'
		+ '</div>';

		var sliderTicksTemplate = ''
		+ '<li class="ti-slider-tick" style="left: $$leftFix">'
		+ '<div>'
		+ '<div class="ti-slider-tick-dot ti-slider-selection-tick-dot ti-slider-selection-tick-dot"></div>'
		+ '<span class="ti-slider-tick-value"></span>'
		+ '</div>'
		+ '</div>'
		+ '</li>';


		var $containerTemplate = $(containerTemplate);
		if (this._options && this._options.sliderTicks && $.isArray(this._options.sliderTicks)) {
			var ticksCount = this._options.sliderTicks.length;
			$.each(this._options.sliderTicks, function(index, el) {
				// TODO: 用类handlebar替换？
				// 先替换，再append，避免多次渲染
				var tmp = sliderTicksTemplate.replace('$$leftFix', index*100/ticksCount + '%');
				var $sliderTicksTemplate = $(tmp);
				$sliderTicksTemplate.find('.ti-slider-tick-value').text(el.label).data('value', el.value);
				$containerTemplate.find('.ti-slider-ticks').append($sliderTicksTemplate);
			});
		}

		this._$dom.append($containerTemplate);
	};
	TimeSlider.prototype.bind = function() {};
	TimeSlider.prototype.destroy = function() {};

	window.TimeSlider = TimeSlider;
}(window.$))