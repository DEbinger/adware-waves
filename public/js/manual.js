let manual = {
man: `
<b>NAME</b>
	man - format and display the manual pages

<b>SYNOPSIS</b>
	<b>man</b> [-n] <u>name</u>

<b>DESCRIPTION</b>
	<b>man</b> formats and displays the manual pages. <u>name</u> is the command you would like to see the manual page of.
	Here are a list of commands that have a manual page: <b>cd</b>, <b>curl</b>, <b>ls</b>, <b>man</b>

<b>OPTIONS</b>
	<b>-n no format</b>
		Displays the raw string of text in manual page without formatting it.
`,
cd: `
<b>NAME</b>
	cd - change directory

<b>SYNOPSIS</b>
	<b>cd</b> <u>name</u>

<b>DESCRIPTION</b>
	<b>cd</b> changes the directory the workstation of choice.
	To see the list of workstations available, use the <b>ls</b> command.
`,
ls: `
<b>NAME</b>
	ls - list workstations

<b>SYNOPSIS</b>
	<b>ls</b> [-s]

<b>DESCRIPTION</b>
	<b>ls</b> shows the list of workstations you have access to.

<b>OPTIONS</b>
	<b>-s status</b>
		Displays status of workstations.
		<b>ALIVE</b>	The workstation is in healthy condition
		<b>DEAD</b>		The workstation has been destroyed by adware
		<b>SOS</b>		An ad is attempting to load into your workstation, stop it!
`,
curl: `
<b>NAME</b>
	curl - see(c) a URL

<b>SYNOPSIS</b>
	<b>curl</b> <u>name</u>

<b>DESCRIPTION</b>
	<b>curl</b> kills the named ad, if it exists.
`
}