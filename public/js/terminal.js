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
				if((args !== undefined) || (context[command].isStandalone)) {
					if(args !== undefined) {
						argIsOption = (args[0] === '-') ? true : false;
					}
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
			stdout(`${currDir()}${stdin}`);
			command = stdin.trim().split(' ')[0];
			if(root[command] !== undefined) {
				linter(root, stdin);
			}else{
				stdout('Please enter commands from the terminal.');
			}
			if(/eval/.test(stdin)) {
				stdout('Don\'t you fucking eval me you judgemental prick!');
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
	function printWorkingDir() {
		let currDir = ADMIN;
		function deepSearch(query) {
			query.child.forEach(child => {
				if(child.here) {
					currDir = child;
				}
				if(child.child.length > 0) {
					child.child.forEach(childchild => {
						deepSearch(childchild);
					});
				}
			});
			return currDir;
		}
		return deepSearch(currDir);
	}

	class dll {
		constructor(name, parent) {
			this.name = name;
			this.here = (parent === undefined) ? true : false;
			this.child = [];
			this.parent = parent || null;
			if(parent !== undefined) {
				parent.addChild(this);
			}
		}
		addChild(child) {
			this.child.push(child);
		}
	}

	let ADMIN = new dll("ADMIN");
	let pc1 = new dll("pc1", ADMIN);
	let pc2 = new dll("pc2", ADMIN);
	let pc3 = new dll("pc3", ADMIN);
	let pc4 = new dll("pc4", ADMIN);
	let currDir = dir => { 
		if(dir !== undefined) {
			if(dir === '..') {
				printWorkingDir().here = false;
				ADMIN.here = true;
				arrow.innerHTML = currDir();
			}else{
				printWorkingDir().child.forEach(child => {
					if(child.name === dir) {
						printWorkingDir().here = false;
						child.here = true;
						arrow.innerHTML = currDir();
					}
				});
			}
		}
		return `<b><span style='color: magenta'>${printWorkingDir().name}</span> <span style='color: cyan'>>> </span></b>`;
	};
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
					'run': function(params) {
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
			'run': function(params) {
				return currDir(params);
			}
		},
		'ls': {
			'isStandalone': true,
			'run': function(params) {
				return 'pc1 pc2 pc3 pc4';
			},
			'options': {
				's': {
					'run': function(params) {
						let returnHTML = "<b>Status of PCs</b><br>";
						let statusArr = [];
						for(key in workstation) {
							if(workstation[key] === null) {
								statusArr.push("<b>ALIVE</b>");
							}else{
								if(workstation[key].crash) {
									statusArr.push("<b>DEAD</b>");
								}else{
									statusArr.push("<b>SOS</b>");
								}
							}
						}
						returnHTML += `pc1&emsp;&emsp;&emsp;${statusArr[0]}<br>`;
						returnHTML += `pc2&emsp;&emsp;&emsp;${statusArr[1]}<br>`;
						returnHTML += `pc3&emsp;&emsp;&emsp;${statusArr[2]}<br>`;
						returnHTML += `pc4&emsp;&emsp;&emsp;${statusArr[3]}`;
						return returnHTML;
					}
				}
			}
		},
		'curl': {
			'isStandalone': true,
			'run': function(params) {
				let atLoc = printWorkingDir().name;
				switch(params) {
					case 'pc1':
						if(atLoc === 'pc1') {
							workstation.ws1Ad.kill = true;
							return `Successfully curled away ad from ${params}`;
						}else{
							return `Please cd to pc1 to curl ads`;
						}
						break;
					case 'pc2':
						if(atLoc === 'pc2') {
							workstation.ws1Ad.kill = true;
							return `Successfully curled away ad from ${params}`;
						}else{
							return `Please cd to pc2 to curl ads`;
						}
						break;
					case 'pc3':
						if(atLoc === 'pc3') {
							workstation.ws1Ad.kill = true;
							return `Successfully curled away ad from ${params}`;
						}else{
							return `Please cd to pc3 to curl ads`;
						}
						break;
					case 'pc4':
						if(atLoc === 'pc4') {
							workstation.ws1Ad.kill = true;
							return `Successfully curled away ad from ${params}`;
						}else{
							return `Please cd to pc4 to curl ads`;
						}
						break;
					default:
						return `${params} does not exist`;
				}
			}
		},
		'pwd': {
			'isStandalone': true,
			'run': function() {
				return printWorkingDir();
			}
		}
	};

	var controlText = document.createElement('h1');
	var control = document.createElement('div');
	var terminal = document.createElement('div');
	var arrow = document.createElement('div');
	var cmd = document.createElement('input');
	terminal.id = 'terminal';
	arrow.id = 'arrow';
	arrow.innerHTML = currDir(printWorkingDir());
	cmd.onkeypress = enter;
	cmd.type = 'text';
	cmd.id = 'cmd';
	control.id = 'control';
	controlText.id = 'controlText';
	controlText.innerText = 'Control Panel';
	control.appendChild(controlText);
	control.appendChild(terminal);
	control.appendChild(arrow);
	control.appendChild(cmd);
	document.body.appendChild(control);

	stdout(`Type "man man" (manual page for the manual command) to begin`);

})();
