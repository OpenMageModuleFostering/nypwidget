// Generated by CoffeeScript 1.9.1
(function() {
  document.observe('dom:loaded', function() {
    var button, enableButton, fetchToken, pwSignup, scope, tokenInput;
    if (typeof priceWaiterTokenURL === 'undefined') {
      return;
    }
    tokenInput = document.getElementById('pricewaiter_configuration_sign_up_token');
    button = document.getElementById('nypwidget_signup');
    scope = document.getElementById('store_switcher');
    if (typeof button === 'undefined') {
      return;
    }
    fetchToken = function() {
      new Ajax.Request(priceWaiterTokenURL, {
        method: 'post',
        parameters: 'scope=' + scope.value,
        onSuccess: function(transport) {
          tokenInput.value = transport.responseText;
        },
        onComplete: function() {
          enableButton();
        }
      });
    };
    pwSignup = function() {
      window.open('https://manage.pricewaiter.com/sign-up?token=' + tokenInput.value);
      return false;
    };
    enableButton = function() {
      button.className = button.className.replace(/(?:^|\s)disabled(?!\S)/g, '');
      button.enable();
    };
    button.observe('click', function() {
      pwSignup();
    });
    if (tokenInput.value === '') {
      fetchToken();
    } else {
      enableButton();
    }
  });

}).call(this);
