/* pokud součet jejich úspor přesahuje 100 tisíc korun. Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich měla platit víc. Dluh vyrovnají po dovolené.

Napiš sérii podmínek, která zjistí (do konzole vypíše):
1. Zda vůbec mohou nebo nemohou na dovolenou jet.
1. Pokud mohou jet (tj. mají dohromady 100 tisíc):
    1. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
    1. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
1. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
    1. Kolik peněz jim celkově ještě chybí.
		1. Kolik musí každá z nich ještě naspořit. */
		
let osoba1 = {
	jmeno: 'Alena',
	uspory: 53000
};
let osoba2 = {
	jmeno: 'Karolína',
	uspory: 68000
};
const mame = () => {
	if (osoba1.uspory + osoba2.uspory >= 100000) {
		console.log('Můžeme vyrazit');
		if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
			console.log(`Obě máte dost peněz.`)
		}
		const mam = (holka) => {
			if (holka.uspory < 50000) {
				console.log(`${holka.jmeno} budeš muset po dovolené doplatit ${50000 - holka.uspory}.`)
			}
		}
		mam(osoba1);
		mam(osoba2);
	} else {
		console.log(`Ještě nám chybí ${100000 - (osoba1.uspory + osoba2.uspory)}.`)
		const mam = (holka) => {
			if (holka.uspory < 50000) {
				console.log(`${holka.jmeno} musí ještě našpořit ${50000 - holka.uspory}.`)
			} else {
				console.log(`${holka.jmeno} má.`)
			}
		}
		mam(osoba1);
		mam(osoba2);
	}
};

//testuju
//ukol_1
//osoba1.uspory = 53000;
//osoba2.uspory = 68000;
//mame();

//ukol_2
//osoba1.uspory = 30000;
//osoba2.uspory = 70000;
//mame();

//ukol_3
//osoba1.uspory = 60000;
//osoba2.uspory = 20000;
//mame();

//ukol_4
//osoba1.uspory = 5000;
//osoba2.uspory = 5000;
//mame();
