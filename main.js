nameEl = $('#name');
emailEl = $('#email');
websiteEl = $('#website');
messageEl = $('#message');
submitEl = $('.submit');
nameErr = $('#nameErr');
emailErr = $('#emailErr');
websiteErr = $('#websiteErr');
messageErr = $('#messageErr');
successEl = $('#success');

submitEl.mouseover(function() {
	submitEl.toggleClass('clicked');
	});

submitEl.mouseout(function() {
	submitEl.toggleClass('clicked');
});

function submit() {
	$('.contactForm').hide();
	$('#nameId').html(nameEl.val());
	$(successEl).show();
};

$(submitEl).click(function() {
	if ($(nameEl).val() === '') {
		$(nameErr).show();
		$(nameEl).css('border-left-color', 'red');
	};
	if ($(emailEl).val() === '' || $(emailEl).val().indexOf('@') === -1) {
		$(emailErr).show();
		$(emailEl).css('border-left-color', 'red');
	};
	if ($(websiteEl).val() === '' || $(websiteEl).val().indexOf('http://', 0) === -1) {
		$(websiteErr).show();
		$(websiteEl).css('border-left-color', 'red');
	};
	if ($(messageEl).val() === '') {
		$(messageErr).show();
		$(messageEl).css('border-left-color', 'red');
	};
	if ($(nameEl).val() !== '' && $(emailEl).val().indexOf('@') >= 0 && $(websiteEl).val().indexOf('http://', 0) === 0 && $(messageEl).val() !== '') {
		submit();
	};
});

$(nameEl).keyup(function() {
	if ($(nameEl).val() !== '') {
		$(nameErr).hide();
		$(nameEl).css('border-left-color', '#000');
	} else {
		$(nameErr).show();
	}
});

$(emailEl).keyup(function() {
	if ($(emailEl).val().indexOf('@') >= 0) {
		$(emailErr).hide();
		$(emailEl).css('border-left-color', '#000');
	} else {
		$(emailErr).show();
	}
});

$(websiteEl).keyup(function() {
	if ($(websiteEl).val().indexOf('http://', 0) === 0) {
		$(websiteErr).hide();
		$(websiteEl).css('border-left-color', '#000');
	} else {
		$(websiteErr).show();
	}
});

$(messageEl).keyup(function() {
	if ($(messageEl).val() !== '') {
		$(messageErr).hide();
		$(messageEl).css('border-left-color', '#000');
	} else {
		$(messageErr).show();
	}
});
