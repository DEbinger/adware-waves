(function terminal() {

	var terminal = document.createElement('div');
	terminal.id = 'terminal';
	document.body.appendChild(terminal);

	var cmd = document.createElement('input');
	cmd.onkeypress = enter;
	cmd.type = 'text';
	cmd.id = 'cmd';
	document.body.appendChild(cmd);

	function disp(str) {
		terminal.innerText += '\n' + str;
		terminal.scrollTop = terminal.scrollHeight;
	}

	disp('Explain rules of game');

	function enter(e) {
		if(e.keyCode === 13) {
			disp(this.value);
			this.value = "";
		}
	}

})();
