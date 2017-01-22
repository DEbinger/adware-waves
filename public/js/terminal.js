(function terminal() {

	function stdout(str) {
		terminal.innerHTML += str + '<br>';
		terminal.scrollTop = terminal.scrollHeight;
	}

	function linter(context, stdin) {
		let command, args, cmdIsOption, argIsOption;
		command = '';
		stdin = stdin.trim();
		for(let i = 0; i < stdin.length; i++) {
			if(stdin[i] === ' ') {
				args = stdin.substr(i+1);
				i = stdin.length;
			}else{
				command += stdin[i];
			}
		}
		cmdIsOption = (command[0] === '-') ? true : false;
		if(cmdIsOption){
			command = command.substr(1);
			if(context[command] !== undefined) {
				stdout(context[command].run(args));
			}else{
				stdout(`"-${command}" is not a valid option`);
			}
		}else{
			if(context[command] !== undefined) {
				if(args !== undefined) {
					argIsOption = (args[0] === '-') ? true : false;
					if(argIsOption) {
						linter(context[command].options, args);
					}else{
						stdout(context[command].run(args));
					}
				}else{
					stdout(`Type "man ${command}" to see usage`);
				}	
			}else{
				return `"${command}" is not a valid command`;
			}
		}
	}

	function defense(stdin) {
		let isString, command;
		isString = typeof stdin === 'string';
		if(isString) {
			stdout(`<b><span style='color: magenta'>ADMIN</span> <span style='color: cyan'>>></span></b> ${stdin}`);
			command = stdin.trim().split(' ')[0];
			if(root[command] !== undefined) {
				linter(root, stdin);
			}else{
				stdout('Please enter commands from the command prompt.');
			}
		}else{
			console.log("Stop trying to hack this game you cheeky bastard.");
		}
	}

	function enter(e) {
		if(e.keyCode === 13) {
			defense(this.value);
			this.value = "";
		}
	}

	let root = {
		'man': {
			'run': function(params) {
				if(manual[params] !== undefined) {
					let html = manual[params];
					html = html.split('\n').join('<br>');
					html = html.split('\t').join('&emsp;');
					return html;
				}else{
					return `No manual entry for "${params}"`;
				}
			},
			'options': {
				'n': {
					run: function(params) {
						if(manual[params] !== undefined) {
							let html = "";
							for(let i = 0; i < manual[params].length; i++) {
								if(manual[params][i] === '\n') {
									html += '<br>';
								}else{
									html += manual[params][i];
								}
							}
							return html;
						}else{
							return `No manual entry for "${params}"`;
						}
					}
				}
			}
		},
		'cd': {
			'check': function(param) {
				
			},
			'params': {
				'expects': 'valid command',
			}
		},
		'ls': {
			'check': function(param) {
				
			},
			'params': {
				'expects': 'valid command',
			}
		},
		'curl': {
			'check': function(param) {
				
			},
			'params': {
				'expects': 'valid command',
			}
		}
	};

	var terminal = document.createElement('div');
	var cmd = document.createElement('input');
	var control = document.createElement('div');
	var controlText = document.createElement('h1');
	terminal.id = 'terminal';
	cmd.onkeypress = enter;
	cmd.type = 'text';
	cmd.id = 'cmd';
	control.id = 'control';
	controlText.id = 'controlText';
	controlText.innerText = 'Control Panel'
	control.appendChild(controlText);
	control.appendChild(terminal);
	control.appendChild(cmd);
	document.body.appendChild(control);

	stdout(`Type "man man" (manual page for the manual command) to begin`);

})();
