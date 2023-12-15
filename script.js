const family = [
	{
		name: 'Mamma',
		Surname: 'Demaria',
		age: 73		
	},
	{	
		name: 'Papà',
		Surname: 'Giacobbe',
		age: 77		
	},
	{
		name: 'Roberto',
		Surname: 'Giacobbe',
		age: 43		
	},
	{
		name: 'Cristina',
		Surname: 'Giacobbe',
		age: 41		
	}]
let check = ""

const driveCheck = family.map((member) => {
if (Number(member.age) < 70) {
check = "Può guidare";} else
{check = "Può guidare, con molta attenzione e revisione ogni due anni";}
return member.name +" " + check
})

console.log(driveCheck)