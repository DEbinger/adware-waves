let manual = {
man: `
**NAME**
	man - format and display the manual pages

**SYNOPSIS**
	**man** [-n] __name__

**DESCRIPTION**
	**man** formats and displays the manual pages. __name__ is the command you would like to see the manual page of.
	Here are a list of commands that have a manual page: **cd**, **curl**, **ls**, **man**

**OPTIONS**
	**-n no format**
		Displays the raw string of text in manual page without formatting it.
`,
cd: `
**NAME**
	cd - change directory

**SYNOPSIS**
	**cd** __name__

**DESCRIPTION**
	**cd** changes the directory the workstation of choice.
	To see the list of workstations available, use the **ls** command.
`,
ls: `
**NAME**
	ls - list workstations

**SYNOPSIS**
	**ls** [-s]

**DESCRIPTION**
	**ls** shows the list of workstations you have access to.

**OPTIONS**
**-s status**
	Displays status of workstations.
	**ALIVE**	The workstation is in healthy condition
	**DEAD**	The workstation has been destroyed by adware
	**SOS**		An ad is attempting to load into your workstation, stop it!
`,
curl: `
**NAME**
	curl - see(c) a URL

**SYNOPSIS**
	**curl** __name__

**DESCRIPTION**
	**curl** kills the named ad, if it exists.
`
}