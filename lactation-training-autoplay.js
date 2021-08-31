(function () {
	function init() {
		var iframe = document.getElementById("main");
		if (iframe) {
			var innerDoc = iframe.contentDocument
				? iframe.contentDocument
				: iframe.contentWindow.document;
			var inputs = innerDoc.getElementsByTagName("input");
			if (inputs.length > 0) {
				for (let index = 0; index < inputs.length; index++) {
					const input = inputs[index];
					if (input.getAttribute("type") == "range" && input.value == "1") {
						var nextButton = innerDoc.getElementsByClassName(
							"slide-control-button-next"
						);
						if (nextButton) {
							nextButton[0].click();
						}
					}
				}
			}
		}
	}
	window.setInterval(init, 100);
	console.log("AutoPlay Extension Enabled");
})();
