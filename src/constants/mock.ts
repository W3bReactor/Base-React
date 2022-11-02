export interface data {
	id: string;
	name: string;
	books: book[];
}

export interface book {
	id: string;
	name: string;
	author: string;
	genre: string;
	price: number;
	annotation: string;
	reviews: review[];
}

export interface review {
	id: string;
	user: user;
	text: string;
}

export interface user {
	id: string;
	name: string;
}

export const kindsArt: data[] = [
	{
		id: '63625507d9a723bc75ddc795',
		name: 'Художественная литература',
		books: [
			{
				id: '636255071d7c68e90c729f11',
				name: 'est',
				author: 'Wooten Noel',
				genre: 'aliqua',
				price: 432,
				annotation:
					'Excepteur duis sint nisi dolor sit nisi aliqua ad sit id reprehenderit irure elit culpa. Magna tempor quis mollit esse nisi qui fugiat duis Lorem non proident Lorem. Veniam adipisicing commodo non quis incididunt nisi laborum deserunt dolor ex magna voluptate. Enim sit pariatur elit esse proident pariatur dolore. Ea veniam occaecat veniam in. Amet ex cupidatat excepteur proident excepteur eu in. Sit minim sint amet minim elit qui.\r\nDeserunt dolore culpa dolor qui enim minim qui nulla nostrud ipsum et exercitation aliquip ullamco. Et labore ad pariatur officia aliqua veniam ea voluptate voluptate minim. Cillum enim consectetur esse deserunt irure proident aliqua reprehenderit esse tempor pariatur laboris. Fugiat velit duis commodo in sint dolore nisi.\r\n',
				reviews: [
					{
						id: '63625507935168737106f54a',
						user: {
							id: '6362550773ac93627e5342f2',
							name: 'Salinas Perez',
						},
						text: 'Nostrud occaecat magna ea veniam voluptate quis ex id ex. Incididunt cillum nisi dolor minim in est. Occaecat nulla fugiat velit anim do laboris ullamco anim sint.\r\n',
					},
					{
						id: '636255071d42db58a607691b',
						user: {
							id: '63625507fd32082682577ddb',
							name: 'Boyd Shelton',
						},
						text: 'Velit ad exercitation est aliquip tempor excepteur labore ad ea sunt incididunt. Deserunt veniam deserunt reprehenderit consectetur incididunt consequat ad aliquip ad duis nulla. Ullamco et esse id qui. Fugiat proident do aute cillum enim voluptate. Magna dolor aute veniam dolore ut. Labore quis magna est quis nisi ullamco ullamco. Id cillum cupidatat aliquip id Lorem ullamco ad anim ex eiusmod ex quis Lorem minim.\r\n',
					},
					{
						id: '6362550797eee2062a16115b',
						user: {
							id: '6362550746f5072cfa3fde69',
							name: 'Amie Abbott',
						},
						text: 'Labore sunt eu laboris sunt officia proident fugiat consequat commodo culpa deserunt dolor. Do ipsum veniam et dolore sit nostrud dolore aliquip nostrud officia aliquip. Duis excepteur pariatur anim ea amet.\r\n',
					},
				],
			},
			{
				id: '6362550780a412c56f0c7a0d',
				name: 'do',
				author: 'Grimes Figueroa',
				genre: 'labore',
				price: 598,
				annotation:
					'Velit quis ea amet minim. Sunt occaecat irure laboris exercitation nisi sint amet occaecat minim magna excepteur tempor do nulla. Duis consequat id nostrud elit ea magna dolor in magna fugiat. Sint mollit officia laborum pariatur dolore in ut ut ipsum eu tempor nostrud veniam in. Aute aliqua ut mollit irure minim cillum sint incididunt minim esse. Anim irure anim duis sit sit laboris.\r\nEx et magna laborum ad. Et pariatur excepteur esse velit ex velit nostrud laborum. Ex pariatur duis laborum do. Est exercitation aliqua irure dolor ut laboris magna. Cupidatat eiusmod nisi sint adipisicing pariatur deserunt in adipisicing proident elit incididunt et.\r\n',
				reviews: [
					{
						id: '6362550723c69961d5b17473',
						user: {
							id: '6362550759f7732668e463ed',
							name: 'Acevedo Norton',
						},
						text: 'Laborum tempor est nostrud reprehenderit anim in ullamco dolor ad nulla cupidatat laborum est. Ullamco cupidatat cillum culpa irure officia excepteur officia ut qui. Nulla incididunt enim exercitation Lorem veniam culpa voluptate. Nulla magna cillum reprehenderit laborum. Aliquip irure tempor esse consectetur minim excepteur cupidatat mollit proident cupidatat aliqua eiusmod.\r\n',
					},
					{
						id: '636255072873f7f26426ff77',
						user: {
							id: '63625507d2ca781a7d92bba9',
							name: 'Elsa Ball',
						},
						text: 'Eiusmod id sunt minim enim sit officia aliqua et consequat. Officia cillum culpa quis ad nulla exercitation exercitation. Ipsum duis incididunt amet amet labore occaecat nostrud sint sunt et nulla laboris non aliquip. Consequat elit excepteur et nisi culpa veniam. Nostrud exercitation consequat eiusmod amet. Aute cillum ad nulla consectetur quis Lorem incididunt aliquip enim. Aute proident labore irure laborum adipisicing minim ut voluptate.\r\n',
					},
				],
			},
			{
				id: '63625507aa7013bab798fcdc',
				name: 'qui',
				author: 'Camille Holman',
				genre: 'laborum',
				price: 732,
				annotation:
					'Occaecat duis reprehenderit ut id velit cillum fugiat minim consectetur deserunt consequat occaecat exercitation quis. Culpa duis dolor commodo veniam irure velit dolor irure dolore exercitation sit cillum ea. Anim velit irure commodo enim eu proident laborum nostrud dolore id. Amet proident id officia ad sint enim pariatur. Est aute ipsum cupidatat laboris in veniam do proident sint.\r\nQui minim labore excepteur mollit ex officia sint incididunt cupidatat sunt. Reprehenderit quis nostrud sit elit magna incididunt sint ea nisi dolore reprehenderit. Officia id officia eiusmod Lorem. Anim qui eu labore pariatur laborum Lorem nulla aliquip. Aute ullamco irure excepteur incididunt duis voluptate consequat. Sint proident velit deserunt est minim do irure veniam consequat aute tempor. Non amet deserunt irure et do occaecat exercitation aute.\r\n',
				reviews: [
					{
						id: '63625507870c4c17614934f6',
						user: {
							id: '636255073181502362f4c167',
							name: 'Sabrina Ayers',
						},
						text: 'Lorem consectetur culpa fugiat ea ex. Non Lorem ipsum fugiat irure nulla aliquip. Magna exercitation officia eu do duis. Laborum mollit eiusmod cupidatat adipisicing non ad nisi elit sint sunt amet ullamco commodo.\r\n',
					},
					{
						id: '63625507f1d5a27565f936c2',
						user: {
							id: '636255077ca1c601e86f660e',
							name: 'Durham Henson',
						},
						text: 'Elit aliqua deserunt irure eu eu aute eiusmod sunt ex et. Voluptate proident aliqua id eiusmod proident incididunt in laborum Lorem occaecat et consequat. Ad ad cupidatat laborum laborum ut velit proident anim excepteur in sunt magna. Irure qui consectetur aliquip id sunt labore nostrud et.\r\n',
					},
					{
						id: '63625507d8b6346436b5f0b0',
						user: {
							id: '636255071d7a3bf88fc76af5',
							name: 'Alice Ortiz',
						},
						text: 'Fugiat qui enim sit minim sit qui qui sit. Officia Lorem consequat nisi dolor enim non duis deserunt. Duis velit aute dolor fugiat enim commodo fugiat consequat. Aliquip commodo dolore aute consectetur excepteur laborum adipisicing ipsum cupidatat excepteur labore eu id sunt. Et proident elit nostrud voluptate magna. Exercitation ullamco in est consequat deserunt quis.\r\n',
					},
					{
						id: '63625507776afac37d3698cb',
						user: {
							id: '63625507fead893958a05f7c',
							name: 'Jocelyn Bell',
						},
						text: 'Laborum ex nisi mollit nulla dolore quis. Ut sit dolore duis sunt consequat eiusmod pariatur anim ullamco duis ad tempor Lorem. Non veniam voluptate cillum ad irure labore cillum laboris.\r\n',
					},
					{
						id: '6362550753647ccc9b4cdb96',
						user: {
							id: '63625507c10d7530981c1221',
							name: 'Araceli Cole',
						},
						text: 'Culpa amet sit nulla labore. Sint est nisi nulla veniam dolore culpa aute magna culpa cupidatat irure dolore id et. Proident labore ipsum ea sit commodo sit laborum voluptate culpa labore nulla nostrud minim. Aute deserunt velit reprehenderit magna. Eu esse est eiusmod velit dolore amet ut laboris.\r\n',
					},
					{
						id: '63625507ae2dbe0a5ff28282',
						user: {
							id: '6362550784514db598897a61',
							name: 'Gomez Suarez',
						},
						text: 'Quis ut ipsum culpa aliquip incididunt dolore sit duis. Ullamco ipsum sunt do exercitation est adipisicing amet consectetur culpa incididunt fugiat quis. Est pariatur velit nulla ut commodo proident nulla voluptate voluptate consequat officia occaecat. Aute voluptate sit non cillum sit laboris non mollit dolore deserunt non. Nostrud ipsum ea occaecat reprehenderit.\r\n',
					},
					{
						id: '636255073a17b542b40215e9',
						user: {
							id: '63625507aacb0c59e2945dd6',
							name: 'Parsons Rosales',
						},
						text: 'Nulla esse pariatur sint quis sunt aute amet in. Magna consectetur veniam incididunt veniam Lorem veniam adipisicing aliquip proident ut duis labore in. Commodo aliquip velit velit excepteur laboris reprehenderit sint sunt enim cillum cupidatat officia voluptate eiusmod.\r\n',
					},
				],
			},
			{
				id: '6362550747dd3ec257141fc8',
				name: 'pariatur',
				author: 'Angeline Goodman',
				genre: 'velit',
				price: 359,
				annotation:
					'Dolore nisi eiusmod ea laboris magna quis pariatur Lorem do veniam Lorem sunt. Sunt labore Lorem exercitation nostrud et. Do velit do velit sunt consectetur incididunt consequat fugiat exercitation. Aliquip laboris incididunt excepteur in anim consectetur sit.\r\nAd id sunt amet excepteur sit qui id magna Lorem ullamco id magna. Incididunt consectetur aliqua consequat culpa laboris consequat deserunt tempor Lorem consectetur consequat esse. Et fugiat quis exercitation tempor culpa Lorem fugiat voluptate eiusmod non eu cupidatat.\r\n',
				reviews: [
					{
						id: '63625507f01316acace87c97',
						user: {
							id: '636255074c5f1a03d844f651',
							name: 'Crystal Mcclain',
						},
						text: 'Ullamco occaecat est dolor incididunt cupidatat elit do tempor laboris. Ullamco consectetur est eu aliquip adipisicing id fugiat nisi. Nostrud et officia adipisicing elit. Dolore quis officia qui sit tempor magna est commodo sunt pariatur consectetur in dolor ad. Incididunt velit Lorem dolor cupidatat voluptate. Fugiat commodo in officia occaecat incididunt consequat veniam culpa id laboris officia labore nulla.\r\n',
					},
					{
						id: '6362550741b3462293f6a1dd',
						user: {
							id: '6362550774491f51cf905eed',
							name: 'Frieda Rose',
						},
						text: 'Incididunt excepteur tempor reprehenderit aliqua eiusmod esse quis magna duis aliquip aliqua ex irure magna. Magna tempor reprehenderit ad cillum Lorem. Laboris aliqua fugiat esse aliquip dolor consequat enim sint dolore consequat elit. Qui dolore ullamco sint et ipsum enim commodo mollit sunt aliquip sit excepteur. Ullamco anim laborum commodo qui cupidatat exercitation nostrud proident irure dolore. Sit id incididunt proident sunt ex incididunt esse. Anim aliquip voluptate sit cillum Lorem labore aliqua in minim nostrud aliqua enim.\r\n',
					},
					{
						id: '63625507e6776c785b5ed79c',
						user: {
							id: '636255072b62d2d8088687a4',
							name: 'Maryellen Pate',
						},
						text: 'Est in sit incididunt qui ipsum deserunt deserunt. Adipisicing labore et aliquip ut non non eiusmod. Velit velit ullamco cupidatat adipisicing ex irure velit velit. Amet do non elit consectetur culpa cupidatat elit ipsum ut cupidatat aliqua est elit tempor.\r\n',
					},
					{
						id: '63625507beebfc0ffac67ecd',
						user: {
							id: '6362550754575a8e2d13729f',
							name: 'Lucas Morrison',
						},
						text: 'Et laboris labore labore incididunt laborum elit ut id quis nostrud est minim veniam. Reprehenderit occaecat do consectetur et. Consectetur qui commodo do minim pariatur ex commodo proident ea aute id.\r\n',
					},
				],
			},
		],
	},
	{
		id: '6362550763fef640fe9429dd',
		name: 'Нехудожественная литература',
		books: [
			{
				id: '636255073563f46411c06b08',
				name: 'nostrud',
				author: 'Lott Mccoy',
				genre: 'cupidatat',
				price: 923,
				annotation:
					'Ipsum sit pariatur do incididunt ex exercitation. Est excepteur anim cupidatat consectetur anim cillum do laborum nostrud. Qui consectetur duis ea consequat veniam consectetur ea incididunt. Qui in ea amet voluptate labore proident sunt nostrud culpa et cillum irure. Elit consectetur occaecat velit ex in nostrud officia duis magna eu anim incididunt consequat excepteur. Ut reprehenderit nisi deserunt ullamco esse qui dolore ullamco officia id sunt dolor et. Aliquip minim labore ipsum voluptate sunt occaecat non consectetur aliquip aliquip Lorem mollit.\r\nUt eu reprehenderit aliquip minim sunt aute duis magna aute ad officia exercitation elit anim. Consectetur fugiat excepteur Lorem cupidatat eiusmod qui dolor deserunt occaecat officia. Eu do tempor consectetur et deserunt amet commodo velit exercitation ad amet. Duis elit sint enim nisi pariatur tempor. Aliqua dolor velit cupidatat ut enim culpa aliquip amet excepteur. Voluptate voluptate sit aliqua exercitation non id commodo reprehenderit veniam tempor anim ex ut cillum.\r\n',
				reviews: [
					{
						id: '63625507ea06de0cef327d3e',
						user: {
							id: '6362550723473a168df55b6a',
							name: 'Melva Rivers',
						},
						text: 'Voluptate do esse irure qui duis nulla duis amet tempor cillum in nulla enim. Tempor do occaecat ad sit velit irure elit. Laboris Lorem cupidatat officia in. Excepteur consequat anim qui sint laboris elit. Amet esse proident in cillum cillum eiusmod exercitation amet duis laboris sint.\r\n',
					},
					{
						id: '63625507abbd11db1f7b40e4',
						user: {
							id: '63625507bbe48f4cf1f611f8',
							name: 'Pierce Odonnell',
						},
						text: 'Laboris qui et ex excepteur consequat enim. Nulla fugiat in est eiusmod ullamco enim. Laboris elit aute id in minim laborum eiusmod. Pariatur id eu ipsum non ex.\r\n',
					},
					{
						id: '636255075f46df7482386111',
						user: {
							id: '636255074c3d68050d700537',
							name: 'Pratt Underwood',
						},
						text: 'Cillum veniam irure ipsum consectetur ut. Aute ad excepteur elit ut tempor tempor deserunt nisi. Voluptate proident ex veniam commodo mollit eiusmod enim. Sit id non mollit veniam adipisicing. Laboris aliqua enim sunt mollit laborum eu do dolore do ea veniam. Ex consequat irure irure duis laboris deserunt incididunt ut labore labore aliqua id nulla deserunt. Irure dolore non pariatur et cupidatat voluptate tempor nisi elit Lorem ex consectetur.\r\n',
					},
				],
			},
			{
				id: '63625507cba535f64fba1f86',
				name: 'eiusmod',
				author: 'Hughes Leonard',
				genre: 'ipsum',
				price: 686,
				annotation:
					'Id ipsum mollit non aliqua excepteur minim elit eiusmod reprehenderit voluptate excepteur proident est aliqua. Qui voluptate ullamco sit exercitation. Consequat pariatur duis aliqua aliqua irure officia anim exercitation voluptate officia incididunt.\r\nNon exercitation est proident minim consequat. Officia elit sint veniam excepteur consectetur qui culpa reprehenderit quis ea. Dolore exercitation dolore Lorem velit esse ipsum amet cupidatat.\r\n',
				reviews: [
					{
						id: '6362550777e3ccbcf4c213a1',
						user: {
							id: '636255072d65d0a821a1baac',
							name: 'Patrice Tillman',
						},
						text: 'Nulla enim dolor incididunt ex velit veniam adipisicing tempor sunt adipisicing. In non excepteur ex commodo in nisi aute in amet occaecat mollit in. Ex magna nulla consequat ipsum nostrud.\r\n',
					},
					{
						id: '63625507802c4f1e0800405d',
						user: {
							id: '63625507e1e705ec8d8fbdcf',
							name: 'Green Bowen',
						},
						text: 'Sint in veniam nostrud cillum laboris in sit ipsum esse ullamco labore. In occaecat esse dolore mollit ad nostrud duis sunt reprehenderit. Et culpa culpa dolor eu elit culpa sunt culpa reprehenderit proident commodo anim.\r\n',
					},
				],
			},
			{
				id: '6362550707e4dd3b8785753c',
				name: 'anim',
				author: 'Dana Stark',
				genre: 'laborum',
				price: 291,
				annotation:
					'Eiusmod quis tempor qui dolore aliqua sint quis anim tempor id culpa reprehenderit nisi. Aute deserunt ullamco exercitation commodo tempor esse tempor nisi. Cupidatat labore occaecat aliqua Lorem cupidatat esse consectetur amet velit amet proident sit. Exercitation adipisicing adipisicing eiusmod quis culpa. Fugiat sint duis labore esse. Nulla Lorem ut sint magna minim laborum.\r\nCillum occaecat eiusmod culpa ea culpa excepteur ex veniam nostrud commodo eiusmod fugiat dolore veniam. Officia officia consequat esse ipsum amet sint ad enim. Culpa deserunt voluptate anim officia elit.\r\n',
				reviews: [
					{
						id: '6362550757aa8a8ec0d0ea72',
						user: {
							id: '63625507b2dfeae70c396596',
							name: 'Margarita Stephenson',
						},
						text: 'Amet magna ut magna ipsum qui eu fugiat eiusmod incididunt id incididunt. Cupidatat irure eiusmod nulla incididunt enim ad. Aliquip commodo voluptate laborum aliqua id non ex eu Lorem nisi ut. In nostrud sint ex laborum et aliquip consectetur anim aliqua aliquip commodo anim sint. Cillum Lorem dolore tempor ex cillum id laborum nulla tempor excepteur. Magna voluptate ullamco cillum culpa adipisicing dolor.\r\n',
					},
					{
						id: '6362550736ffe3f4c56c4169',
						user: {
							id: '63625507206bdea2281939c9',
							name: 'Caroline Leach',
						},
						text: 'Ad veniam magna est nisi. Proident dolore nostrud exercitation sit culpa ullamco enim minim aliquip commodo duis officia ad. Cillum reprehenderit cupidatat in amet consectetur. Proident aliquip commodo enim consectetur elit Lorem adipisicing sint aliquip pariatur. Laborum occaecat et non commodo labore et velit sint dolor labore reprehenderit sint. Esse ut ut eu est et do elit. Laborum excepteur veniam eu voluptate.\r\n',
					},
					{
						id: '636255077bbaf3cc03be6c56',
						user: {
							id: '63625507e407c9e528992524',
							name: 'Rosetta Clemons',
						},
						text: 'Et occaecat sit duis voluptate culpa ad tempor do esse laborum laboris. Aute irure tempor aliqua minim laborum anim sunt enim ex culpa nisi. Officia fugiat enim labore duis est est reprehenderit incididunt excepteur. Cillum sunt id dolor minim. Voluptate ea duis sunt amet.\r\n',
					},
					{
						id: '63625507f3e70706ef284a17',
						user: {
							id: '6362550756ca4308d8e7588f',
							name: 'Ramos Mccray',
						},
						text: 'Velit occaecat fugiat ipsum qui in adipisicing. Qui qui incididunt nulla quis anim anim ad. Aliquip culpa labore eu incididunt laborum laboris consequat eu ea Lorem velit est culpa. Pariatur duis sint esse ad et deserunt Lorem nulla. Est anim qui commodo tempor tempor. Laborum cillum eiusmod dolor in ut proident consequat magna cillum cillum consequat. Veniam aliquip labore veniam est reprehenderit Lorem veniam amet tempor irure.\r\n',
					},
				],
			},
			{
				id: '6362550705de5ec7cac7761a',
				name: 'esse',
				author: 'Mildred Slater',
				genre: 'esse',
				price: 559,
				annotation:
					'Fugiat cupidatat nostrud labore dolor elit et adipisicing dolore ea excepteur nostrud occaecat ad. In enim fugiat reprehenderit tempor amet veniam. Laboris cupidatat est minim elit ut anim. Irure laboris proident excepteur excepteur sunt ipsum sit fugiat cupidatat nisi culpa sit. Ut consequat veniam ad non est deserunt occaecat nulla. Laborum do qui voluptate sit aute sunt culpa nisi pariatur adipisicing esse dolore do. Incididunt Lorem labore adipisicing officia occaecat.\r\nAliqua dolore ut aliquip sit Lorem. Est cupidatat esse dolore sint dolor. Cillum sit minim in occaecat. Irure do quis anim minim et aliqua laborum irure fugiat nostrud.\r\n',
				reviews: [
					{
						id: '63625507825e722974252279',
						user: {
							id: '63625507a4cd96756367ea43',
							name: 'Alissa Henry',
						},
						text: 'Quis excepteur ea id minim eu excepteur anim. Excepteur Lorem laborum ea est culpa in excepteur dolor aliquip mollit. Incididunt et quis ipsum esse veniam exercitation dolore cillum sint. Eu est dolor aliqua qui ad aute tempor nostrud elit labore laboris. Aute occaecat ex aliqua occaecat incididunt voluptate elit. Ut dolore commodo duis et in consequat anim fugiat.\r\n',
					},
					{
						id: '63625507aef39b666d755888',
						user: {
							id: '63625507827a547964547b04',
							name: 'Nancy Alexander',
						},
						text: 'Cupidatat in ex do tempor. Ex et minim elit eu commodo mollit. Non irure magna laboris ex excepteur. Laboris aliqua enim nisi in cillum magna Lorem irure sit incididunt eu tempor velit occaecat.\r\n',
					},
					{
						id: '6362550708bf22317fb68966',
						user: {
							id: '63625507e80c7c32fed02083',
							name: 'Marcy Wood',
						},
						text: 'Duis cillum pariatur laborum eu culpa sunt do sint exercitation nisi eu ea sunt deserunt. Do ut ad esse ut anim elit culpa reprehenderit aliquip consectetur eu cillum est. Aute eu eiusmod ullamco quis proident dolor consequat ea velit exercitation aliquip mollit. Anim ex dolor cillum exercitation amet ipsum velit esse. Veniam culpa dolore adipisicing nisi dolor reprehenderit dolore Lorem in irure minim nostrud excepteur nisi. Aute sunt id tempor duis commodo enim anim dolor do non consequat. Nostrud quis ad tempor proident est minim sunt.\r\n',
					},
				],
			},
			{
				id: '636255073418a34f65ba1248',
				name: 'duis',
				author: 'Frazier Hull',
				genre: 'elit',
				price: 593,
				annotation:
					'Non et ut mollit do nulla proident in amet. Sunt occaecat nulla et non id. Duis reprehenderit fugiat sit mollit incididunt.\r\nAd labore anim cillum et labore officia deserunt officia et sunt magna. Consectetur ex pariatur nulla veniam incididunt consequat sint eiusmod ut aliqua veniam. Excepteur Lorem eiusmod elit id commodo id sit id do laboris. Irure esse exercitation deserunt nulla duis sint consectetur nulla mollit id deserunt culpa culpa.\r\n',
				reviews: [
					{
						id: '63625507c0fa3bdbc85bab77',
						user: {
							id: '63625507cc43700cc1c454be',
							name: 'Mitzi Reed',
						},
						text: 'Nisi commodo aliquip proident amet mollit occaecat reprehenderit qui reprehenderit sunt laborum occaecat. Tempor ex incididunt ipsum et exercitation aute commodo id nulla reprehenderit ipsum. Occaecat cupidatat dolor esse pariatur mollit in et culpa consectetur qui excepteur.\r\n',
					},
					{
						id: '63625507e2e24452865e8b88',
						user: {
							id: '636255074785895481e0aa1e',
							name: 'Bishop David',
						},
						text: 'In minim laborum non tempor magna ex qui non elit proident nisi. Elit ea ex consectetur enim deserunt officia sit ad minim fugiat nisi do ex. Aliqua sunt nisi officia consequat proident est ipsum consectetur mollit. Dolor et incididunt elit aute incididunt et aute aliqua commodo amet. Et enim consequat magna reprehenderit cillum. Magna labore quis quis laboris commodo ut id nisi.\r\n',
					},
					{
						id: '6362550781cb58b1b6e4c396',
						user: {
							id: '63625507339839886f9f86e4',
							name: 'Johanna Cooley',
						},
						text: 'Pariatur commodo commodo aute non Lorem incididunt ut eu sunt consequat officia elit irure. Sint incididunt occaecat incididunt nulla minim Lorem ad. Magna consequat adipisicing anim id reprehenderit consequat aute id sunt magna ut id velit occaecat.\r\n',
					},
				],
			},
			{
				id: '6362550794970a57f6b318f8',
				name: 'ea',
				author: 'Madelyn Gross',
				genre: 'consectetur',
				price: 848,
				annotation:
					'Labore laboris eiusmod irure Lorem exercitation ipsum laborum enim sit qui laboris nostrud enim veniam. Minim do ullamco consequat cupidatat ipsum in qui enim aliqua. Id consectetur labore mollit eiusmod veniam laborum ullamco aliquip consequat. Ex do proident deserunt id sit dolore. Consequat nostrud nostrud non cillum adipisicing exercitation laborum qui Lorem mollit consequat non.\r\nIrure reprehenderit cillum mollit consectetur. Fugiat occaecat non eiusmod dolor velit dolor laborum aliquip occaecat et quis reprehenderit aliqua. Laboris eu excepteur adipisicing consequat officia laborum quis nisi tempor pariatur velit qui eiusmod nisi. Aute ea exercitation non excepteur ipsum dolor elit cillum duis nisi eiusmod veniam culpa consectetur. Ad anim aliquip aliqua tempor ut esse aliqua ex Lorem ut adipisicing commodo. Nostrud commodo ad esse eu voluptate excepteur mollit labore irure irure non mollit ipsum.\r\n',
				reviews: [
					{
						id: '636255077b309b306b5062ec',
						user: {
							id: '636255075a64a2b041909135',
							name: 'Elvia Porter',
						},
						text: 'Deserunt labore aliquip est nisi cillum tempor reprehenderit pariatur duis. Eiusmod ipsum dolor id exercitation duis magna eu et magna aliqua excepteur esse laborum. Aliqua elit ullamco ipsum sint nisi. Officia nisi commodo sunt enim reprehenderit adipisicing cupidatat et Lorem veniam cillum fugiat ex magna.\r\n',
					},
					{
						id: '6362550798d35a52f4276934',
						user: {
							id: '636255079f7c1376e960b422',
							name: 'Donna Wolfe',
						},
						text: 'Aute elit ex sit nostrud sunt nisi magna sit consectetur qui nisi tempor duis. Consequat quis cupidatat enim nulla consectetur sunt minim nulla sint ea. Elit occaecat nulla eiusmod magna do eu dolore mollit ex. Culpa duis dolor minim quis aliquip irure ipsum dolor ad aliqua. Lorem mollit cillum enim et tempor labore aliqua ex occaecat. Cillum sit ullamco veniam aliquip elit magna elit.\r\n',
					},
					{
						id: '63625507d0a7b41b668df2f9',
						user: {
							id: '6362550776d3b322c7f0517d',
							name: 'Tia Humphrey',
						},
						text: 'Eu ipsum consectetur adipisicing consequat sit nisi. Consequat et amet tempor nostrud velit culpa dolore mollit ea laboris. Consequat deserunt deserunt laborum officia et aliqua laboris laborum consectetur non cupidatat est nostrud proident. Nisi minim adipisicing cupidatat do pariatur duis ea do nisi consectetur nulla ullamco.\r\n',
					},
				],
			},
			{
				id: '63625507c318543493432614',
				name: 'enim',
				author: 'Kasey Wooten',
				genre: 'aliquip',
				price: 283,
				annotation:
					'Ad labore eu dolore adipisicing minim do consequat. Id id ullamco ipsum id laborum laborum cupidatat. Et do incididunt nostrud quis ea et et adipisicing veniam pariatur nulla eiusmod dolor.\r\nId incididunt est aliquip excepteur labore sit laboris laborum. Adipisicing nostrud quis consequat elit eu aliqua culpa. Sit in deserunt quis labore laborum est veniam aute ullamco. Qui duis amet nisi velit reprehenderit. Culpa minim quis pariatur sint proident dolor dolore incididunt exercitation Lorem pariatur incididunt culpa. Sint exercitation quis proident do in proident nulla ullamco laborum. In fugiat veniam culpa commodo officia id incididunt excepteur ipsum velit minim laborum eu.\r\n',
				reviews: [
					{
						id: '63625507905a6739c91731ba',
						user: {
							id: '63625507e856e8130145969f',
							name: 'Gaines Curtis',
						},
						text: 'Proident officia do consectetur reprehenderit minim aute eu velit. Commodo fugiat fugiat exercitation labore. Reprehenderit cupidatat qui Lorem ut dolore exercitation cillum. Non pariatur adipisicing ea nostrud consequat enim ut irure excepteur.\r\n',
					},
					{
						id: '63625507018a519a10590a89',
						user: {
							id: '6.3625507358429e23',
							name: 'Shelia Lucas',
						},
						text: 'Nisi reprehenderit proident est velit sint minim. Sit dolor commodo ullamco amet anim dolore ea reprehenderit. Commodo adipisicing consectetur veniam mollit commodo velit fugiat cillum dolor occaecat. Labore pariatur amet laborum aliqua veniam sit adipisicing officia laboris exercitation sunt Lorem non veniam.\r\n',
					},
					{
						id: '63625507b8ae35e8f8c81065',
						user: {
							id: '63625507fd3f6f28d06cc6f2',
							name: 'Hewitt Douglas',
						},
						text: 'Et laborum enim cupidatat adipisicing non incididunt commodo occaecat aliqua id labore qui reprehenderit ipsum. Excepteur ex laboris in id ex cillum tempor irure nisi amet. Qui mollit Lorem aute id minim mollit occaecat mollit enim adipisicing tempor. Nulla velit voluptate adipisicing Lorem est dolor. Voluptate nisi sit esse ex veniam ad duis est duis laboris dolore incididunt tempor est. Non duis ad anim eiusmod laborum. Velit consectetur est Lorem ipsum sit quis quis Lorem.\r\n',
					},
					{
						id: '63625507b8461a80d098cbb4',
						user: {
							id: '63625507ecb477e08cd3fb8f',
							name: 'Crosby Dominguez',
						},
						text: 'Mollit ex enim enim consectetur id et ad. Eiusmod ipsum nulla elit consequat et nostrud. Tempor mollit sunt et mollit dolore. Eu dolor anim nisi anim sunt quis exercitation ea non eiusmod. In mollit proident sit magna laborum quis sit aute est sit ea.\r\n',
					},
				],
			},
		],
	},
	{
		id: '63625507f972b7c995565a9b',
		name: 'Книги для детей',
		books: [
			{
				id: '636255075f4934340c2017e3',
				name: 'sit',
				author: 'Foreman Bartlett',
				genre: 'aliqua',
				price: 995,
				annotation:
					'Commodo esse ad Lorem aliqua incididunt esse exercitation non aute exercitation nisi Lorem exercitation. Qui nostrud do sint adipisicing cillum amet cillum sunt eu ipsum. Dolor veniam excepteur veniam deserunt esse magna sit aliquip eiusmod. Occaecat anim amet magna dolore sunt.\r\nNostrud aliquip et deserunt eu anim non enim pariatur amet qui excepteur velit eiusmod ullamco. Est velit ut laborum commodo dolor. Proident commodo dolor commodo sit enim irure duis nulla ex. Duis labore occaecat reprehenderit fugiat labore irure pariatur.\r\n',
				reviews: [
					{
						id: '63625507778422fc35bd2d34',
						user: {
							id: '63625507b27461d0d67f5cbe',
							name: 'Kelley Jefferson',
						},
						text: 'Excepteur id eu dolore culpa. Ad nulla est magna consectetur reprehenderit deserunt enim sint Lorem qui sit Lorem in magna. Aute velit commodo et ad aute reprehenderit cillum tempor commodo adipisicing. Fugiat veniam cillum reprehenderit elit dolore fugiat ipsum ea qui sint non Lorem ex et.\r\n',
					},
					{
						id: '63625507c671511f38a9d743',
						user: {
							id: '6362550752bcb383c0d0795b',
							name: 'Lucinda Elliott',
						},
						text: 'Adipisicing aliquip non amet minim. Ad voluptate do fugiat esse fugiat laborum minim. Aliqua enim sint mollit sint velit sit velit sit amet. Consectetur ea duis proident velit exercitation et. Qui ea enim qui aliqua elit quis laboris.\r\n',
					},
					{
						id: '63625507ffaa6ba94da9b3e9',
						user: {
							id: '63625507384b18fdb79a19dc',
							name: 'Janis Castaneda',
						},
						text: 'Fugiat pariatur incididunt cupidatat irure excepteur est consequat commodo sint ullamco fugiat est. Officia ullamco ullamco fugiat id velit non dolor deserunt culpa ipsum ut amet eiusmod. Excepteur do id est culpa exercitation quis mollit labore incididunt consequat aliquip reprehenderit officia. Commodo quis esse amet ullamco dolore qui adipisicing. Fugiat ipsum dolore aute ex dolore magna esse reprehenderit est magna esse. Duis sint ea nisi consectetur ea occaecat veniam exercitation nisi exercitation anim ea. Aliquip voluptate mollit ad minim culpa elit mollit exercitation in commodo quis occaecat aliquip.\r\n',
					},
					{
						id: '6362550737585cc948d77683',
						user: {
							id: '636255072110377ca22502e4',
							name: 'Decker Tucker',
						},
						text: 'Laborum enim Lorem labore anim laborum labore quis tempor qui quis. Enim culpa reprehenderit labore pariatur ut sunt minim veniam irure ut nulla ullamco nisi Lorem. Qui Lorem consectetur ex ut tempor aliquip aute est non cupidatat sit dolor. Consectetur ea mollit velit officia esse. Eiusmod nostrud proident pariatur velit laboris est ipsum velit. Eu voluptate in ipsum consectetur ex. Ea minim ut sunt minim incididunt et mollit est cillum eiusmod excepteur proident id ipsum.\r\n',
					},
				],
			},
			{
				id: '636255077ac459f29a07151f',
				name: 'eiusmod',
				author: 'Moody Mays',
				genre: 'commodo',
				price: 329,
				annotation:
					'Veniam anim do nostrud dolore excepteur nisi veniam. Deserunt in do cillum in aliquip reprehenderit occaecat cupidatat enim sint. Dolor mollit do quis pariatur ex consequat aute irure ullamco in.\r\nIn laboris fugiat nulla velit labore minim nulla duis anim sint voluptate esse ipsum. Ad tempor ipsum occaecat nulla deserunt voluptate consequat cupidatat. Quis magna magna labore ut excepteur cillum qui et culpa. Velit esse ut enim excepteur ullamco voluptate id.\r\n',
				reviews: [
					{
						id: '63625507e32ac3a2cb52678a',
						user: {
							id: '63625507302bd4cb7e2b3106',
							name: 'Alvarado Snyder',
						},
						text: 'Mollit nostrud deserunt reprehenderit excepteur. Tempor est culpa culpa id veniam commodo velit ad tempor eu qui. Laboris est ipsum elit deserunt officia voluptate amet esse nostrud fugiat. Mollit esse magna ex irure. Magna officia eu excepteur dolore.\r\n',
					},
					{
						id: '63625507e6ed27a608350028',
						user: {
							id: '63625507e5ec6bafb036db76',
							name: 'Ashley Mayo',
						},
						text: 'Ea aliquip deserunt incididunt voluptate pariatur velit esse ut. Et cupidatat aliqua reprehenderit cillum pariatur id sint ad pariatur. Magna duis laborum duis deserunt labore id ex pariatur ea tempor officia nulla non. Quis aliqua nostrud in reprehenderit voluptate ut Lorem eu elit. Excepteur excepteur aute nostrud aute sunt est deserunt deserunt voluptate ut eu esse cupidatat duis. Nisi nulla enim cillum amet minim do proident eiusmod nulla est elit Lorem irure proident.\r\n',
					},
					{
						id: '6362550751f408b9d162e402',
						user: {
							id: '6362550757bf7ae71e0d1c1c',
							name: 'Nguyen Randolph',
						},
						text: 'Enim ut dolore deserunt elit culpa commodo velit est ipsum tempor commodo Lorem incididunt labore. Aliqua ea elit nostrud laborum proident officia quis est irure ullamco dolor aliqua consequat occaecat. Deserunt pariatur ullamco pariatur esse qui labore pariatur fugiat officia deserunt elit aliquip ipsum. Lorem enim nulla mollit veniam. Cupidatat quis nulla velit proident qui laborum minim velit incididunt voluptate. Incididunt officia non voluptate incididunt officia consequat aliqua mollit ut ullamco ipsum anim do duis.\r\n',
					},
				],
			},
			{
				id: '636255079ed49118782f5db9',
				name: 'labore',
				author: 'Dudley Gates',
				genre: 'aliquip',
				price: 571,
				annotation:
					'Est commodo ipsum exercitation laborum ea irure excepteur mollit anim consequat aliquip laborum ea occaecat. Qui in fugiat ex sint non aliqua aliqua cillum. Nulla enim Lorem aliquip veniam non nisi consequat id dolore ullamco nulla in consequat. Veniam aliqua veniam et labore non velit. Culpa labore laborum esse magna aliqua commodo aliquip veniam ullamco. Enim in ad non fugiat deserunt ea. Deserunt nisi consectetur ullamco in non quis quis.\r\nAliqua sint et enim magna do esse consequat consectetur mollit. Et ut consectetur duis do sint ut ex duis deserunt elit excepteur. Aliquip esse Lorem officia magna magna consectetur sint pariatur irure sit. Laborum id eiusmod veniam laborum pariatur excepteur excepteur esse laborum aliquip ullamco minim. Sit id minim do est duis ex laboris. Qui Lorem elit velit sit nisi nulla. Ad dolore eu enim exercitation qui pariatur deserunt reprehenderit eu fugiat.\r\n',
				reviews: [
					{
						id: '636255073d2e3041ce8519fe',
						user: {
							id: '6362550764128777a8ea7dbe',
							name: 'Cherry Jacobs',
						},
						text: 'Voluptate elit enim quis excepteur ea velit dolore nostrud anim. Magna nisi mollit in adipisicing ad aute velit laborum cupidatat magna irure cupidatat. Cupidatat et eu irure exercitation pariatur aliquip commodo ullamco pariatur commodo. In deserunt sit duis veniam veniam minim officia elit consequat. Consequat nostrud ipsum proident sunt eiusmod proident. Nulla elit sunt sint consectetur nostrud aliquip labore eu.\r\n',
					},
					{
						id: '636255079a3b112e9929f86f',
						user: {
							id: '636255071b2a0032a349daab',
							name: 'Lillie Harris',
						},
						text: 'Enim sunt fugiat ad anim. Exercitation quis consequat incididunt elit non sunt fugiat cillum exercitation labore reprehenderit et aute. Pariatur officia cupidatat anim sint cillum fugiat ex aliquip sit velit enim enim dolore esse. Aute cillum aliqua quis anim incididunt aliqua.\r\n',
					},
					{
						id: '636255073c488740ef302157',
						user: {
							id: '636255076127b8b1eaf2be9a',
							name: 'Holly Downs',
						},
						text: 'Est ut veniam aliquip aute. Amet aliqua deserunt id laboris amet dolore et aute. Amet officia excepteur nisi aute non voluptate adipisicing id esse anim. Id nostrud qui adipisicing incididunt exercitation elit in aliquip officia. Proident ut dolore fugiat do aute. Cillum elit veniam eu incididunt.\r\n',
					},
					{
						id: '6362550779f642673b208df0',
						user: {
							id: '63625507c513fcfd00d4cf3a',
							name: 'Bender Pugh',
						},
						text: 'Aliqua laboris culpa reprehenderit consectetur amet duis velit. Sunt proident consectetur nulla in aliquip cillum aliquip consequat nisi. Reprehenderit magna eiusmod pariatur dolor nisi irure proident incididunt aliqua est non excepteur magna non. Consequat ea Lorem ullamco nisi nisi culpa ea anim.\r\n',
					},
				],
			},
			{
				id: '63625507d67d37aee5db0e91',
				name: 'excepteur',
				author: 'Latasha Rutledge',
				genre: 'laboris',
				price: 855,
				annotation:
					'Incididunt velit nostrud proident enim enim id magna adipisicing adipisicing. Dolor dolore sunt aliqua eu exercitation nostrud fugiat voluptate labore sint exercitation cillum ullamco. Nisi nostrud aliquip quis mollit laboris aliquip esse reprehenderit velit minim mollit. Laboris deserunt aliquip officia officia occaecat mollit incididunt cupidatat.\r\nOccaecat officia eiusmod culpa cillum dolore eu in. Cupidatat consequat cillum nisi id veniam aliquip ullamco quis in mollit nulla deserunt elit. Minim eiusmod cillum tempor eiusmod tempor cupidatat ad do Lorem consectetur nostrud irure commodo non. Tempor veniam commodo ea dolore deserunt commodo in amet nulla culpa do. Id tempor anim excepteur laboris duis sit mollit voluptate excepteur quis labore. Est mollit ea elit ipsum do in sint anim non. Cillum laborum aute consequat veniam sunt esse quis consectetur.\r\n',
				reviews: [
					{
						id: '63625507f2b33e7d11941cbc',
						user: {
							id: '6362550796c820bf32f3ad23',
							name: 'Jeri Goodwin',
						},
						text: 'Consectetur do Lorem mollit dolore ut in. Ut sint commodo nulla pariatur sit ex irure nisi dolor anim Lorem ex. Laboris nostrud fugiat consequat pariatur laborum ad consectetur cillum. Est dolore excepteur veniam irure et eu pariatur eiusmod mollit quis excepteur excepteur amet. Adipisicing amet officia consequat ex Lorem nulla consectetur enim sint magna duis nulla non ipsum. Sint ea aute occaecat incididunt cillum dolor. Cupidatat deserunt non adipisicing culpa non adipisicing.\r\n',
					},
					{
						id: '63625507b3c09dce3e3de1e6',
						user: {
							id: '63625507b93c49b4f6202697',
							name: 'Juarez Mathis',
						},
						text: 'Nulla velit deserunt quis nostrud elit labore consectetur enim velit nulla do dolore cupidatat. Enim adipisicing irure nulla reprehenderit nulla id nisi excepteur consectetur veniam laborum nisi consequat. Velit aute nostrud elit consequat incididunt minim ullamco magna aliquip veniam mollit duis.\r\n',
					},
					{
						id: '63625507d2b5a7e18033fa40',
						user: {
							id: '63625507eae7cae1414f0d4e',
							name: 'York Sargent',
						},
						text: 'Eu commodo consequat pariatur culpa id laborum irure cupidatat aliqua ad quis et ad esse. Aliquip fugiat cillum culpa cillum aliquip incididunt. Ut exercitation mollit commodo laborum magna consectetur non in proident do dolor.\r\n',
					},
					{
						id: '63625507ade3043c4ada79d8',
						user: {
							id: '636255079ce7a915c9cfa341',
							name: 'Sylvia Byrd',
						},
						text: 'Ex quis velit sunt aliquip adipisicing. Eu occaecat duis exercitation sint Lorem. Sint et commodo ad pariatur id non tempor. Culpa fugiat ipsum tempor anim et officia magna non culpa do enim sunt ea amet. Dolore est magna magna eu proident ex incididunt. Dolor est mollit fugiat est qui cupidatat cillum eu aliqua cillum ex qui Lorem cillum.\r\n',
					},
					{
						id: '636255070496eeebb64e309e',
						user: {
							id: '63625507e17e4b2a74e321c8',
							name: 'Ebony Logan',
						},
						text: 'Labore irure laboris consectetur exercitation sunt do irure eiusmod adipisicing fugiat. Laborum nulla culpa deserunt magna. Laboris eu nostrud aliqua sunt anim tempor consequat. Exercitation pariatur exercitation labore quis exercitation pariatur adipisicing aute amet pariatur fugiat elit irure laborum. Sunt ut est reprehenderit exercitation dolore enim veniam elit ex qui deserunt eiusmod.\r\n',
					},
				],
			},
			{
				id: '6362550786a8da9d6693a7ef',
				name: 'aute',
				author: 'Caitlin Brown',
				genre: 'sit',
				price: 976,
				annotation:
					'Eiusmod anim incididunt pariatur commodo est. Nostrud officia ut dolore in veniam fugiat ad. Ipsum consectetur irure cillum consectetur dolore dolor qui velit ullamco nisi reprehenderit sunt et.\r\nLorem est nulla non aute quis voluptate mollit adipisicing nostrud dolore irure eu magna. Ad velit aute enim consectetur excepteur est do reprehenderit. Fugiat magna duis excepteur Lorem ad ipsum exercitation mollit elit sunt magna laboris. Quis culpa aliquip sunt magna minim adipisicing labore quis exercitation do consequat anim deserunt amet.\r\n',
				reviews: [
					{
						id: '63625507643c910be7bc96b0',
						user: {
							id: '6362550733fe098645cea741',
							name: 'Duncan Stein',
						},
						text: 'Anim incididunt nulla est fugiat id ipsum et dolor qui velit. Cupidatat cillum non irure qui ullamco duis occaecat voluptate commodo. In elit esse culpa esse id veniam irure pariatur tempor dolor culpa qui.\r\n',
					},
					{
						id: '6362550712ec9075bba2dcce',
						user: {
							id: '6362550756e5af582c00846e',
							name: 'Allison Soto',
						},
						text: 'Id occaecat enim labore amet occaecat nostrud ut. Reprehenderit est reprehenderit mollit ad sint voluptate aute. Fugiat elit adipisicing in ea qui Lorem mollit proident nisi mollit. Velit proident adipisicing sunt in et. Sit incididunt nostrud pariatur do dolore ea.\r\n',
					},
				],
			},
		],
	},
	{
		id: '636255075f26f421c901e6e5',
		name: 'Переодические издания',
		books: [
			{
				id: '63625507b791880304a28b8d',
				name: 'culpa',
				author: 'Willis Fischer',
				genre: 'fugiat',
				price: 709,
				annotation:
					'Esse aliqua mollit cillum labore sunt Lorem proident nisi Lorem laboris ad excepteur proident. Nulla dolore dolor anim dolore irure amet eu. Amet ex eiusmod dolor et deserunt minim Lorem deserunt sit ut mollit consequat. Exercitation nulla mollit officia anim quis anim officia eu et reprehenderit incididunt mollit. Fugiat adipisicing adipisicing ipsum proident quis excepteur non quis voluptate laboris. Adipisicing exercitation do veniam ex enim ullamco nisi nisi adipisicing elit qui quis ea.\r\nNostrud labore cillum sunt in fugiat consequat aliqua. Adipisicing tempor mollit commodo mollit adipisicing qui cillum ex duis est tempor incididunt. Elit exercitation eiusmod cillum ea exercitation. Sunt ullamco cupidatat incididunt est magna aliquip quis occaecat aliquip laborum. Adipisicing minim magna aute ullamco cupidatat tempor consequat. Magna sint anim quis irure ea veniam cillum.\r\n',
				reviews: [
					{
						id: '63625507c77d944a6e5ca4fb',
						user: {
							id: '63625507139b22c48e2f08aa',
							name: 'Cervantes Witt',
						},
						text: 'Ea sint mollit voluptate est anim aute nostrud mollit Lorem velit aliqua qui. Ut aute id ea consectetur aliqua qui do officia labore do adipisicing. Quis ex esse ut tempor enim amet est eu. Anim tempor dolore Lorem amet et.\r\n',
					},
					{
						id: '63625507ce6c376e6115210f',
						user: {
							id: '63625507e5e28868a36a4c6e',
							name: 'Dillon Barry',
						},
						text: 'Anim aute duis sint qui amet elit nulla mollit qui. Amet nostrud veniam nulla esse occaecat nulla reprehenderit sit nisi nisi. Sunt ex ullamco sunt nulla voluptate sit sint amet id est laborum. Esse ipsum proident do et non. Do laboris incididunt et sint. Laborum excepteur nulla Lorem magna culpa ad ad enim dolore do culpa pariatur.\r\n',
					},
					{
						id: '636255070ba6fefdf44ee581',
						user: {
							id: '6362550740aca2f992269642',
							name: 'Page Herman',
						},
						text: 'Cupidatat eu eiusmod dolor dolore officia ullamco adipisicing dolore. Minim consequat id ad culpa tempor qui et do anim duis. Incididunt dolor exercitation ut do sunt.\r\n',
					},
					{
						id: '63625507cb2b949e1c356ac8',
						user: {
							id: '63625507e776dbacb2633379',
							name: 'Farrell Walters',
						},
						text: 'Commodo duis magna deserunt eu nostrud pariatur nostrud dolore. Non culpa ad ea ea tempor Lorem deserunt mollit laboris esse consequat. Laboris elit aliquip incididunt aute ut duis non aute aute deserunt. Tempor sint proident laborum amet pariatur. Veniam dolor deserunt ea ex tempor enim fugiat ea duis ea culpa. Dolor elit sint ullamco labore officia. Sint mollit consequat commodo qui.\r\n',
					},
					{
						id: '636255072197fbfee8601a4d',
						user: {
							id: '636255072bd510c578d1c1a4',
							name: 'Sheena Gill',
						},
						text: 'Dolor reprehenderit anim dolor sit duis. Aliquip amet id est fugiat labore. Nostrud consectetur consequat pariatur excepteur esse ullamco laborum. Qui dolor eiusmod non occaecat duis consequat velit aliquip sit ex laborum. Adipisicing ea laboris commodo proident reprehenderit ex ut nulla culpa exercitation ullamco. Nostrud laborum ex incididunt nisi esse reprehenderit pariatur fugiat ullamco dolore.\r\n',
					},
					{
						id: '636255072dcb5fc59cdccbf3',
						user: {
							id: '63625507f21543bea5c73e24',
							name: 'Dickson Medina',
						},
						text: 'Commodo excepteur amet exercitation duis est quis minim ad. Ea laboris in in reprehenderit fugiat incididunt. Eiusmod laborum ad ex quis voluptate reprehenderit adipisicing voluptate aliqua laborum. Fugiat fugiat dolor id nisi deserunt nulla magna consequat sit commodo occaecat eiusmod. Consectetur consectetur deserunt veniam officia laborum adipisicing mollit occaecat et et tempor incididunt aliquip. Dolor sint nulla sint qui deserunt elit proident ut duis ullamco.\r\n',
					},
					{
						id: '63625507ab9c5fb95ccf75dc',
						user: {
							id: '63625507d778a23763738f14',
							name: 'Deanna Baird',
						},
						text: 'Ea officia commodo qui fugiat aliquip. Excepteur enim non eiusmod pariatur Lorem ullamco consequat veniam cupidatat do. Ipsum eu dolor proident eu cillum pariatur labore nostrud ex velit pariatur adipisicing enim. Mollit irure ex culpa cupidatat ea deserunt cillum. Dolor occaecat deserunt consequat consequat dolor occaecat nostrud.\r\n',
					},
				],
			},
			{
				id: '6362550792539d11965402e9',
				name: 'consequat',
				author: 'Alta Reid',
				genre: 'proident',
				price: 849,
				annotation:
					'Adipisicing magna ex elit cillum quis. Commodo culpa commodo esse esse sint elit ullamco. Id tempor ullamco duis consequat voluptate ex excepteur officia non.\r\nEnim consequat duis amet aliquip reprehenderit duis consectetur fugiat cillum. Ea laborum ullamco velit commodo ad eu officia exercitation ipsum deserunt consectetur. Laboris veniam est mollit incididunt deserunt. Culpa proident pariatur proident excepteur mollit Lorem quis deserunt. Veniam ex occaecat amet culpa non dolore nulla ex anim nisi labore incididunt.\r\n',
				reviews: [
					{
						id: '636255079e387b3121e4adf2',
						user: {
							id: '6362550723d015877eb94be5',
							name: 'Mathews Juarez',
						},
						text: 'Proident duis officia sint officia officia et in nisi. Proident do esse eu laborum nostrud ullamco aute qui aute officia sint mollit occaecat. Mollit aliquip dolor nostrud amet qui. Labore deserunt fugiat duis pariatur pariatur commodo ut mollit Lorem adipisicing sint enim. Adipisicing sint laborum reprehenderit aliqua tempor labore amet consequat cupidatat incididunt occaecat elit. Commodo ipsum ex ipsum velit magna cupidatat eiusmod dolore magna pariatur elit. Qui ex laboris do aliquip sunt magna.\r\n',
					},
					{
						id: '636255079af6866040d4573c',
						user: {
							id: '636255076e93bcb8ceea9b45',
							name: 'Monroe Molina',
						},
						text: 'Non dolore esse labore fugiat. Mollit incididunt duis laboris tempor minim cillum proident commodo do. Dolor ad id reprehenderit exercitation irure nostrud enim. Tempor incididunt anim pariatur irure ex nisi velit esse officia anim.\r\n',
					},
					{
						id: '63625507a01c0656dafb41f6',
						user: {
							id: '6362550728c1ff5926b6c5c9',
							name: 'Silvia Hart',
						},
						text: 'Mollit nisi ullamco nostrud sint excepteur consequat. Ipsum laboris nisi minim mollit eiusmod amet reprehenderit sunt aliquip dolore. Dolore dolore est fugiat id reprehenderit voluptate ullamco ad ut Lorem pariatur tempor cupidatat. Consequat nostrud laborum ipsum mollit qui excepteur enim non nisi in aute. Sit reprehenderit laborum voluptate do consequat excepteur ullamco nisi dolor eu qui elit incididunt aute. Enim incididunt sint elit nostrud aliqua laborum ullamco. Ad elit elit laboris quis adipisicing tempor minim sunt dolor.\r\n',
					},
					{
						id: '6362550799851e2d94fe3ac5',
						user: {
							id: '63625507ef6fae21a9beccf7',
							name: 'June Lopez',
						},
						text: 'Id amet enim labore nostrud commodo fugiat mollit nisi consequat cillum sint. Exercitation exercitation velit sit eu elit amet nisi ex dolor id nisi proident velit ex. Adipisicing esse irure in sint reprehenderit adipisicing ullamco cupidatat eu aliquip laborum. Qui reprehenderit ex minim laborum eiusmod do est occaecat aliqua nisi eu anim consequat dolore.\r\n',
					},
					{
						id: '636255078d6cd3e44d017e4f',
						user: {
							id: '63625507637c15b793a70f98',
							name: 'Sharpe Miranda',
						},
						text: 'Minim aute sit eiusmod labore mollit nostrud ut sit sint fugiat. Mollit non pariatur deserunt adipisicing Lorem elit dolor nisi veniam nulla. Nulla in esse consequat excepteur. Eu duis et in officia occaecat velit anim.\r\n',
					},
					{
						id: '63625507fe94b0beb7a3b410',
						user: {
							id: '6362550706d68fc9997dbbbf',
							name: 'Hernandez Randall',
						},
						text: 'Esse laborum elit id sunt cillum laboris aliquip laborum. Esse aute cillum eiusmod sint esse id et qui culpa. Ut dolore minim culpa dolore dolor elit velit ipsum dolor ipsum exercitation labore deserunt. Cillum nulla consequat labore cillum commodo enim consequat sit do id. In id fugiat enim dolor commodo ea culpa proident.\r\n',
					},
				],
			},
			{
				id: '63625507f6fd033fa5c7ea3f',
				name: 'laboris',
				author: 'Mcfarland Barnes',
				genre: 'labore',
				price: 495,
				annotation:
					'Minim duis pariatur magna dolor dolor deserunt. Adipisicing quis tempor veniam consequat sunt qui magna enim labore quis sit enim est. Deserunt duis aliquip sit ea sit laboris quis voluptate irure voluptate cillum veniam deserunt.\r\nCulpa quis eiusmod magna eiusmod ad labore. Deserunt non cupidatat duis est. Id non aute magna amet voluptate deserunt. Tempor pariatur cillum nulla labore dolor minim consectetur in minim minim quis qui. Anim ad sint excepteur sunt aliquip ad est officia laborum aute. Nisi in officia sit laborum labore consectetur irure qui do esse dolore Lorem ullamco.\r\n',
				reviews: [
					{
						id: '636255073be2586332a8e82c',
						user: {
							id: '636255079cbf1d2875c31013',
							name: 'Janelle Strickland',
						},
						text: 'Eu tempor ullamco duis nulla cupidatat id exercitation eiusmod. Laborum esse tempor non ut do enim non Lorem mollit eiusmod cupidatat. Amet aute occaecat eiusmod magna id ex occaecat exercitation nostrud aute nisi eiusmod voluptate. Voluptate tempor ea nostrud incididunt laborum. Incididunt officia cupidatat sint laborum et cupidatat qui magna Lorem et amet enim. Dolore in cillum irure do aliquip.\r\n',
					},
					{
						id: '636255078c4d3d0d38d9f1c5',
						user: {
							id: '636255077b5526d9ddfd76f1',
							name: 'Whitaker Lang',
						},
						text: 'Minim pariatur ut fugiat sunt occaecat reprehenderit. Adipisicing Lorem elit deserunt deserunt mollit magna occaecat. Nostrud eiusmod ex excepteur et deserunt laboris. Sint Lorem minim quis ipsum proident occaecat eiusmod. Eiusmod duis deserunt id labore elit Lorem irure. Deserunt aute magna reprehenderit sunt minim eiusmod aliqua ex cupidatat. Consequat mollit culpa in excepteur id nisi minim quis.\r\n',
					},
					{
						id: '636255072e6a1bfa26a0006a',
						user: {
							id: '63625507c2e3ea46d1ccc050',
							name: 'Cochran Guzman',
						},
						text: 'Ex cupidatat ex occaecat adipisicing est. Aliqua sunt cillum sit fugiat culpa. Ea cillum id elit consequat aute irure exercitation laborum occaecat est in. Sit aliquip minim exercitation id sunt occaecat aliquip in laborum enim quis. Sunt pariatur laborum dolor magna deserunt enim. Ut dolor ea consectetur minim Lorem sint ut eu quis adipisicing officia quis.\r\n',
					},
					{
						id: '636255071c2d340e78ce581d',
						user: {
							id: '636255075170f0d05410c1f0',
							name: 'Clarissa Horn',
						},
						text: 'Minim mollit nostrud tempor deserunt ipsum sunt cupidatat id consectetur commodo. In tempor ullamco id consequat exercitation fugiat laborum duis et esse laboris amet voluptate. Excepteur deserunt labore dolor ad nisi Lorem elit occaecat ullamco ea id eu. Qui commodo sint laboris eu commodo officia. Labore commodo ut aliqua deserunt. Labore commodo non sunt enim sint tempor do ea. Pariatur esse esse aliquip officia mollit proident duis sunt sit et consequat eiusmod eiusmod do.\r\n',
					},
				],
			},
			{
				id: '636255078472319ec1f6d9f9',
				name: 'id',
				author: 'Lakeisha Cameron',
				genre: 'do',
				price: 932,
				annotation:
					'Proident dolore irure nulla adipisicing do excepteur eu minim. Aliqua nisi adipisicing consequat amet sint cupidatat. Incididunt sunt ullamco et dolor in fugiat duis occaecat amet amet cillum. Aliquip ipsum commodo in adipisicing aute cupidatat fugiat do laborum. Aute officia pariatur laboris velit consequat reprehenderit ipsum enim ea elit esse non amet. Excepteur ea dolor quis mollit ea excepteur Lorem qui enim officia quis id.\r\nAliquip aliqua elit aliquip occaecat ex officia. Velit elit elit officia eu culpa sit labore id velit. Ipsum magna elit sint qui occaecat.\r\n',
				reviews: [
					{
						id: '63625507a53c4c447d0d1548',
						user: {
							id: '636255070a181389397440b3',
							name: 'Leanna Casey',
						},
						text: 'Aliquip adipisicing eiusmod duis sunt sint reprehenderit Lorem reprehenderit ullamco magna. Excepteur ut qui deserunt enim proident. Non cillum eiusmod veniam consectetur ad duis aliquip sit. Enim minim Lorem in mollit consequat in exercitation.\r\n',
					},
					{
						id: '636255070e10b627e44d1c7b',
						user: {
							id: '636255079ba71b2f88192352',
							name: 'Tamika Sanford',
						},
						text: 'Anim qui commodo cillum ea quis deserunt anim laborum nulla voluptate dolor eu. Cillum ad do laboris velit officia ullamco mollit ea tempor sint. Magna deserunt amet fugiat consequat irure mollit in consectetur reprehenderit cillum fugiat do et. Sit sunt enim laborum laborum dolor tempor tempor duis ipsum. Ex aliquip elit eiusmod proident officia aliquip fugiat do exercitation deserunt non labore. Sit labore sint laborum eu nulla Lorem sit aliquip. Ut excepteur incididunt laboris ullamco laborum amet.\r\n',
					},
					{
						id: '636255078800364675e8c39a',
						user: {
							id: '63625507ea7dd2952bf5ed08',
							name: 'Kitty Jordan',
						},
						text: 'Sit mollit aute Lorem irure amet culpa mollit deserunt quis. Nostrud culpa in ut qui ipsum culpa labore occaecat sunt aute amet labore reprehenderit. Ullamco anim aliquip esse sunt fugiat exercitation deserunt. Aute nostrud amet voluptate ullamco eu ex ea ad est voluptate occaecat tempor proident. Sunt minim veniam quis nulla.\r\n',
					},
					{
						id: '6362550797fc0bfa513c30c9',
						user: {
							id: '6362550764ac4c834fada9b6',
							name: 'Albert Rush',
						},
						text: 'Culpa duis occaecat do ut fugiat amet sunt commodo dolore labore. Est duis incididunt officia fugiat quis. Eu qui incididunt eiusmod deserunt in ullamco Lorem reprehenderit.\r\n',
					},
				],
			},
			{
				id: '63625507f666fbdc536470dc',
				name: 'esse',
				author: 'Velez Santana',
				genre: 'amet',
				price: 654,
				annotation:
					'Aliqua id commodo laborum velit aliqua exercitation nostrud qui exercitation et non Lorem. Tempor aliquip adipisicing proident ut aliqua ea veniam fugiat eu occaecat ut irure esse. Fugiat esse ullamco dolore qui occaecat dolor adipisicing labore laborum Lorem minim ea. Sint ad labore nulla elit excepteur qui ea amet.\r\nQui elit labore amet qui. Excepteur duis aliqua in reprehenderit ea ea culpa culpa in qui adipisicing consequat. Sint eiusmod elit deserunt exercitation laboris nostrud aliquip labore. Nulla eiusmod nisi quis eiusmod ipsum. Cillum incididunt duis irure nulla pariatur.\r\n',
				reviews: [
					{
						id: '63625507606426c6c9fd7c76',
						user: {
							id: '63625507f2b892e90457ffa4',
							name: 'Avila Mercado',
						},
						text: 'Consectetur magna exercitation minim qui fugiat id non. Aliquip eiusmod do officia sit sit proident officia adipisicing exercitation adipisicing et cupidatat occaecat. Enim consectetur sit mollit amet velit pariatur quis aliqua. Elit nostrud proident ipsum cillum magna duis id aliqua aliqua quis.\r\n',
					},
					{
						id: '63625507340e8476437bbb9c',
						user: {
							id: '6362550782cad6e929f0594f',
							name: 'Hurst Dodson',
						},
						text: 'Dolore ipsum ea consequat pariatur quis qui anim dolor consectetur culpa excepteur velit adipisicing. Velit elit amet occaecat esse. Eiusmod proident voluptate deserunt laboris aliqua. Ad magna minim nostrud aute aute in esse laborum proident ad dolor est irure. Anim proident occaecat et Lorem aute occaecat eu dolor non. Velit magna aliquip velit ea enim minim quis veniam ea deserunt aliqua mollit.\r\n',
					},
					{
						id: '6362550701a467eb88ec99a7',
						user: {
							id: '63625507769aba02a1dcb753',
							name: 'Latisha Welch',
						},
						text: 'Tempor id fugiat aliqua est enim. Qui reprehenderit nostrud duis aliqua dolore sit eu nulla irure Lorem ad cupidatat. Commodo ex nostrud consectetur commodo voluptate enim cillum labore irure deserunt mollit non. Do et fugiat ipsum ipsum ea consequat laborum pariatur. Ut incididunt elit eiusmod pariatur adipisicing aute sint dolore amet ullamco ad pariatur tempor.\r\n',
					},
					{
						id: '63625507081ee697abb93d97',
						user: {
							id: '63625507d128c5d63d7fd68d',
							name: 'Beatrice Rodgers',
						},
						text: 'Dolor aute eu officia voluptate adipisicing ut qui. Cillum mollit adipisicing consectetur cupidatat enim dolor dolor dolore officia reprehenderit tempor est ad. Adipisicing ad deserunt irure deserunt fugiat et consequat dolore qui. Pariatur commodo aliqua veniam ipsum aliquip minim fugiat officia et excepteur. Deserunt sit ex in id veniam enim.\r\n',
					},
					{
						id: '636255078bffc72fccb7867b',
						user: {
							id: '63625507a04869522c5a0d77',
							name: 'Dale Dudley',
						},
						text: 'Laboris sint aute officia ad aliquip deserunt ut. Esse sit sit dolore Lorem. Et veniam do eu sunt est. Pariatur ex reprehenderit deserunt dolore et veniam. Non nulla tempor nostrud et nostrud. Tempor occaecat consequat elit aliqua cillum do labore enim commodo sit et veniam proident enim.\r\n',
					},
				],
			},
			{
				id: '63625507511ff6f36399268f',
				name: 'reprehenderit',
				author: 'Aileen Wilcox',
				genre: 'commodo',
				price: 504,
				annotation:
					'Do magna velit ex voluptate esse commodo dolore sint et eu tempor exercitation. Eiusmod id pariatur sint consectetur fugiat dolor aliqua velit laboris amet exercitation et sit nostrud. Commodo pariatur reprehenderit occaecat est officia voluptate sunt excepteur aute tempor culpa duis sit. Velit magna commodo velit aliquip. Cillum quis pariatur quis sunt sit fugiat consectetur labore excepteur do qui incididunt veniam ut. Officia proident exercitation reprehenderit Lorem excepteur eiusmod consequat sunt Lorem amet qui est.\r\nVelit Lorem exercitation laboris et ea fugiat aliquip commodo laboris aute in aliquip. Ea magna minim ipsum et eu ipsum tempor laborum nulla magna deserunt do quis. Et tempor quis voluptate cillum ea et id veniam proident esse nulla consectetur id. Proident pariatur ea tempor deserunt duis qui adipisicing velit qui. Laborum labore nisi ullamco irure fugiat sunt sunt. Nostrud deserunt ullamco deserunt consectetur cupidatat tempor et occaecat.\r\n',
				reviews: [
					{
						id: '636255078158c25cb696a713',
						user: {
							id: '636255070fa8b82b31abe4c7',
							name: 'Gena Bradshaw',
						},
						text: 'Qui amet labore sit excepteur cupidatat in sint pariatur elit consectetur. Eu ipsum enim ex adipisicing et cupidatat et labore officia ex eiusmod enim nisi. Eu enim duis ullamco dolore.\r\n',
					},
					{
						id: '6362550766fa651527a8941d',
						user: {
							id: '636255078d96c265277800d7',
							name: 'Lee Kramer',
						},
						text: 'Duis mollit pariatur aute qui enim amet mollit. Quis laboris esse dolor esse ipsum adipisicing amet commodo. In ipsum aliqua sunt occaecat dolore fugiat culpa mollit.\r\n',
					},
				],
			},
		],
	},
	{
		id: '6362550749706bdb23e81a89',
		name: 'Религия',
		books: [
			{
				id: '63625507a7d0b584ac63799b',
				name: 'dolore',
				author: 'Nell Serrano',
				genre: 'duis',
				price: 870,
				annotation:
					'Id officia cillum fugiat aliqua. In quis eu id cupidatat consequat. Ex eu nisi id enim veniam eiusmod sit. Velit commodo ullamco ullamco dolore amet.\r\nElit veniam nostrud aute nostrud magna sint proident nisi eu incididunt tempor anim deserunt est. Laborum laboris magna voluptate incididunt mollit nulla qui laborum eiusmod qui dolore. Reprehenderit aute ut ullamco labore amet reprehenderit sunt incididunt aliquip consequat anim elit. Sint consequat consequat cillum velit deserunt ipsum ad sit aute. Mollit laboris consectetur in ad commodo eu laboris amet cillum sint ipsum. Et exercitation velit proident nostrud labore. Anim veniam dolor in pariatur.\r\n',
				reviews: [
					{
						id: '6362550718656d2e40da1b8d',
						user: {
							id: '6362550724dd7d7db0dd373c',
							name: 'Inez Glover',
						},
						text: 'Fugiat cillum ut laboris duis qui qui nulla proident ullamco. Dolor excepteur aliqua officia magna. Duis reprehenderit nulla elit eu in voluptate cillum excepteur cupidatat culpa adipisicing ullamco. Exercitation duis ex est proident do tempor eiusmod cillum voluptate ut officia. Anim magna dolore esse culpa consequat aliqua exercitation consectetur eiusmod laborum occaecat duis esse consequat. Anim pariatur sit est aute ad eiusmod culpa non reprehenderit dolor anim.\r\n',
					},
					{
						id: '636255079214f7e8560a3cf9',
						user: {
							id: '6362550754eb8e46391a3e95',
							name: 'Dona Cohen',
						},
						text: 'Occaecat veniam in nisi occaecat aliquip mollit adipisicing ex eiusmod. Reprehenderit voluptate nostrud laborum nulla cillum enim aute et quis ipsum non. Occaecat aute sit aliquip minim voluptate irure non exercitation aute dolor laboris ex nostrud. In velit et dolor veniam.\r\n',
					},
					{
						id: '636255070e1328be0ffd41e0',
						user: {
							id: '63625507b23f538730bf2002',
							name: 'Tommie Sheppard',
						},
						text: 'Eiusmod esse ullamco commodo velit sint pariatur duis cupidatat dolore commodo enim sit commodo. Est et proident excepteur labore exercitation nulla dolor. Occaecat qui nostrud proident proident qui esse dolore labore velit. Aliqua Lorem consequat fugiat nostrud dolor ex anim enim commodo. Cupidatat sint dolor ut proident officia dolor.\r\n',
					},
					{
						id: '6362550718c89689562ec753',
						user: {
							id: '63625507bfd98d46773b5f48',
							name: 'Vaughn Roach',
						},
						text: 'Officia nostrud minim dolore cillum. Veniam aute eiusmod ut quis cupidatat. Voluptate commodo ad officia id laborum do labore consectetur. Eiusmod esse nisi dolore eu ad ullamco laborum consectetur mollit occaecat anim veniam. Excepteur ipsum amet excepteur sit occaecat consectetur id sit irure exercitation aliquip.\r\n',
					},
					{
						id: '63625507c4c8b39a76c91e48',
						user: {
							id: '636255071cdd6cacfc98fd79',
							name: 'Mitchell Nixon',
						},
						text: 'Reprehenderit laboris quis aute dolore sit magna voluptate. Aliqua officia in esse ut mollit proident aliquip do eu nisi. Dolore reprehenderit nostrud nulla deserunt quis duis dolore voluptate laborum ex adipisicing ea qui. Dolor ut consequat irure veniam velit id ex est laboris sunt Lorem. Dolore reprehenderit velit fugiat esse qui reprehenderit mollit occaecat irure labore ea magna. Sint ea occaecat nostrud qui esse ex.\r\n',
					},
					{
						id: '63625507d3387e4c4c33d7a6',
						user: {
							id: '636255076ef6c25e01a659d4',
							name: 'Jacobson Allison',
						},
						text: 'Anim mollit deserunt dolore nostrud adipisicing laboris officia ex anim labore enim sunt Lorem. Officia excepteur consectetur dolore nostrud fugiat eiusmod nisi sint elit sint ullamco aliqua in. Id voluptate ex laboris aute deserunt aliqua aliqua. Nisi minim adipisicing labore cillum occaecat quis irure.\r\n',
					},
					{
						id: '636255071f7bb3795fa176fd',
						user: {
							id: '636255071b9ca95ede97a22f',
							name: 'Teri Chambers',
						},
						text: 'Fugiat ullamco qui reprehenderit minim nostrud non exercitation do amet. In non cupidatat cupidatat est do velit veniam quis elit. Duis et in Lorem culpa Lorem elit amet. Ex nostrud consectetur dolor ullamco do aliquip dolor cillum minim. Cupidatat commodo ut culpa pariatur velit.\r\n',
					},
				],
			},
			{
				id: '63625507a11f618e977318c2',
				name: 'ex',
				author: 'Shirley Hester',
				genre: 'ipsum',
				price: 286,
				annotation:
					'Id labore laboris ad veniam nisi deserunt. Ea enim incididunt cupidatat nisi excepteur. Culpa mollit deserunt exercitation incididunt laboris cillum consequat anim officia exercitation. Nostrud consectetur quis dolor anim ad nisi voluptate id eiusmod laboris officia qui esse cupidatat. Sit adipisicing sint dolor eiusmod. Veniam nostrud est eu elit ut ullamco culpa laboris fugiat dolor aliquip cupidatat exercitation laboris.\r\nQuis ipsum cillum anim ipsum quis Lorem minim velit mollit veniam non. Nisi laboris dolor exercitation aute esse commodo id officia eu nisi proident voluptate non fugiat. Commodo ullamco dolor officia non laboris qui.\r\n',
				reviews: [
					{
						id: '6362550726f7ca70a770f947',
						user: {
							id: '63625507182669e2cc045118',
							name: 'Gould Pennington',
						},
						text: 'Occaecat aliqua qui tempor anim enim esse reprehenderit Lorem laborum duis ullamco qui eu. Sunt nisi voluptate cupidatat pariatur occaecat eu incididunt laborum fugiat irure. Consectetur ea cupidatat ea in consectetur ullamco dolor ullamco fugiat enim fugiat exercitation. Est laboris sit reprehenderit minim mollit enim adipisicing exercitation in quis velit labore ex. Duis cupidatat magna consequat consequat ipsum et. Duis consectetur adipisicing enim deserunt ut duis in dolor non reprehenderit Lorem.\r\n',
					},
					{
						id: '636255071123d050cbaa75b0',
						user: {
							id: '636255079a0129d4113f9f74',
							name: 'Deann Patel',
						},
						text: 'Aliqua consectetur esse reprehenderit magna fugiat commodo anim consequat ipsum eiusmod ullamco. Qui cillum cupidatat voluptate mollit qui ad consectetur id reprehenderit. Elit nulla ullamco cillum ipsum do quis eu commodo nostrud. Cupidatat eiusmod anim consequat aute amet aute commodo quis non nisi eiusmod tempor laboris. Elit ullamco anim non laborum est. Culpa non non eu laborum laborum deserunt consequat enim labore velit officia commodo.\r\n',
					},
				],
			},
			{
				id: '636255071d370630ab11437e',
				name: 'occaecat',
				author: 'Carmen Sherman',
				genre: 'reprehenderit',
				price: 891,
				annotation:
					'Reprehenderit et est nulla adipisicing ea deserunt ut sint dolore anim anim sint officia. Non tempor elit sunt ullamco pariatur enim commodo anim consectetur magna. Cillum fugiat exercitation sit ipsum elit ullamco nisi nulla aliquip sint.\r\nCillum elit nisi sint voluptate sint sit. Nisi magna aliqua Lorem mollit. Quis cupidatat magna exercitation minim do dolore non tempor laboris et ex. Exercitation nostrud est aute est. Labore mollit duis cillum laboris. Culpa quis occaecat ex veniam esse enim dolor.\r\n',
				reviews: [
					{
						id: '63625507e83d6b13f91847ad',
						user: {
							id: '63625507135764f6e2e49e22',
							name: 'Esperanza Fry',
						},
						text: 'Eiusmod minim et ut anim fugiat. Aute et fugiat non velit aliquip mollit eiusmod eu in laborum fugiat nisi ullamco. Non tempor veniam qui quis minim elit mollit sint. Non do in proident enim commodo irure tempor fugiat eiusmod cillum exercitation aliquip dolore commodo. Enim culpa deserunt enim magna qui qui minim adipisicing amet nostrud elit non minim. Sint enim nisi ex laborum voluptate minim officia magna.\r\n',
					},
					{
						id: '636255073096b917ea371b83',
						user: {
							id: '63625507baa69a9d5f4da2a5',
							name: 'Haley Garner',
						},
						text: 'Eiusmod ea minim consequat aliqua voluptate ea reprehenderit proident non aliqua. Veniam deserunt do laboris esse id est proident. Sunt sit aute fugiat deserunt magna aliquip ut minim amet nostrud sunt voluptate sunt sunt. Magna consectetur sit aliquip minim culpa veniam occaecat officia aute labore pariatur. Aliqua adipisicing nisi irure excepteur enim.\r\n',
					},
					{
						id: '636255078c9f8aa0f2322a0e',
						user: {
							id: '636255073d35b8849af48523',
							name: 'Fuentes Morgan',
						},
						text: 'Est nulla laborum laborum Lorem in ad aliquip nulla est minim ex fugiat ipsum. Qui deserunt sunt magna consectetur anim enim aliqua reprehenderit aute aute occaecat elit. Quis labore in ad cupidatat ut commodo enim ullamco nostrud cillum. Cupidatat irure adipisicing ex nulla laborum eu laborum exercitation.\r\n',
					},
					{
						id: '636255078f711baf94565d66',
						user: {
							id: '6362550751722cec11b45cb3',
							name: 'Thornton Whitfield',
						},
						text: 'Reprehenderit laboris cillum excepteur est in anim ea irure excepteur exercitation Lorem dolore ex. Minim reprehenderit deserunt nisi magna qui eu dolore irure veniam irure irure. Exercitation non anim laborum nisi magna eiusmod ipsum esse voluptate ex nulla excepteur. Consectetur veniam laboris nostrud esse voluptate dolore laborum ut.\r\n',
					},
				],
			},
			{
				id: '6362550713773d0a7b2f57f1',
				name: 'occaecat',
				author: 'Baldwin Duffy',
				genre: 'minim',
				price: 848,
				annotation:
					'Dolor dolore occaecat Lorem adipisicing consequat pariatur proident labore nisi enim excepteur. Ullamco nisi dolor tempor aliqua in irure ea cupidatat. Ipsum proident culpa consectetur exercitation esse et non laborum laborum excepteur non.\r\nMollit enim culpa adipisicing ullamco veniam ullamco. Velit consectetur amet anim magna aliquip fugiat nisi sunt deserunt do irure magna veniam. Quis do proident occaecat consequat laboris est consequat reprehenderit. Proident enim excepteur in esse id commodo culpa est ullamco occaecat fugiat nostrud. Esse sit duis velit dolor enim. Exercitation velit ea ullamco aute eu magna occaecat quis reprehenderit.\r\n',
				reviews: [
					{
						id: '6362550746fd692cd2e1d41c',
						user: {
							id: '636255071488af18c8d4b23b',
							name: 'Corinne Cobb',
						},
						text: 'Ipsum fugiat sunt nisi nulla exercitation occaecat est voluptate. Anim qui aliqua tempor non duis ex nostrud nulla amet sit dolor. Proident officia veniam labore eiusmod occaecat. Lorem dolore amet et consequat mollit dolor ullamco pariatur deserunt fugiat enim culpa pariatur. Sunt et labore ea mollit mollit et minim eiusmod incididunt deserunt eu est. Nulla culpa reprehenderit excepteur anim esse laboris nulla proident duis sit adipisicing excepteur qui. Dolore labore ex non voluptate anim do consectetur reprehenderit enim.\r\n',
					},
					{
						id: '6362550780fe52c0ee6f8720',
						user: {
							id: '6362550701212826881b0bbf',
							name: 'Mcbride Hartman',
						},
						text: 'Minim amet minim deserunt ad amet velit labore qui in. Consequat laborum proident officia veniam cillum fugiat veniam. Anim irure laboris fugiat eiusmod magna nulla magna ad fugiat occaecat culpa mollit cupidatat aute.\r\n',
					},
					{
						id: '63625507b5d04e4b4bae73de',
						user: {
							id: '6362550767a2a79331edf1c2',
							name: 'Stevenson Kim',
						},
						text: 'Lorem ea ipsum veniam deserunt esse. Deserunt labore culpa eu est ipsum ullamco minim. Laborum reprehenderit non anim ut fugiat anim. Lorem duis nulla dolore pariatur aute magna laborum amet ad mollit ullamco cillum dolor.\r\n',
					},
					{
						id: '63625507b505c78da0c71445',
						user: {
							id: '6362550714e9b8ede72e7453',
							name: 'Fuller Conrad',
						},
						text: 'Ut eu aliqua reprehenderit dolore amet ad exercitation cillum tempor proident excepteur consectetur incididunt ullamco. Est in aliqua minim do dolore Lorem eiusmod. Elit incididunt id eu aliquip laborum eiusmod ut irure est et magna excepteur excepteur commodo. Nulla ullamco pariatur enim deserunt ut ipsum officia dolore nostrud ipsum ullamco laborum anim labore. Ut est ipsum laboris labore culpa eiusmod aliqua nulla labore anim sunt esse.\r\n',
					},
					{
						id: '636255078a66a19155b5fcbb',
						user: {
							id: '636255076635e97a4a7f864a',
							name: 'Richmond Shields',
						},
						text: 'Dolore eu adipisicing ea labore culpa. Velit fugiat nostrud velit ullamco nostrud. Aliquip anim magna nulla laborum. Ut ex pariatur reprehenderit ea enim qui culpa. Reprehenderit officia nisi esse ipsum sint. Cupidatat occaecat voluptate excepteur fugiat cillum reprehenderit elit non esse aliqua pariatur et amet culpa.\r\n',
					},
				],
			},
			{
				id: '63625507988cca61bc7bb271',
				name: 'Lorem',
				author: 'Castro Bass',
				genre: 'occaecat',
				price: 544,
				annotation:
					'Tempor sint voluptate ea voluptate proident dolore fugiat irure cillum proident. Qui id sit velit et aute cillum aute et dolor magna. Eu nisi pariatur anim ea fugiat aute in incididunt officia. Minim qui dolor minim quis. Voluptate pariatur aliqua reprehenderit nostrud minim et exercitation voluptate magna ex et aute. Consequat incididunt ullamco sunt reprehenderit do ea excepteur incididunt.\r\nAute sint occaecat ut sint sint ullamco ut id adipisicing minim ullamco velit incididunt. Minim ullamco adipisicing in irure eu exercitation adipisicing tempor in sit veniam duis. Excepteur est qui elit eiusmod occaecat occaecat voluptate dolor proident veniam culpa adipisicing sunt. Proident in minim nostrud nostrud culpa elit laboris voluptate culpa eu proident minim tempor. Fugiat id proident quis nostrud.\r\n',
				reviews: [
					{
						id: '63625507398e1918bdd18422',
						user: {
							id: '63625507872f1c5a910c9317',
							name: 'Ellen Prince',
						},
						text: 'Consectetur nostrud esse quis enim duis culpa consequat adipisicing. Voluptate labore ut adipisicing incididunt proident nisi cillum ut cillum eiusmod veniam amet. Sit pariatur adipisicing consequat commodo commodo velit qui consequat in ut aliqua aliquip velit non. Fugiat aliquip aliquip commodo dolore commodo.\r\n',
					},
					{
						id: '63625507ecf9049c6a1d49df',
						user: {
							id: '636255071b221264f9770da7',
							name: 'Jordan Crosby',
						},
						text: 'Sint labore proident consequat incididunt nisi magna commodo cupidatat ex ipsum esse dolor in. Est velit sint deserunt id in. Irure dolore enim minim quis incididunt dolor esse do nostrud excepteur in incididunt.\r\n',
					},
					{
						id: '63625507c2ecac5172ab7863',
						user: {
							id: '63625507cc469b36e4ae9c05',
							name: 'Patricia Miles',
						},
						text: 'Laboris qui voluptate amet laborum anim dolor elit sit. Nostrud sint deserunt nisi minim ullamco Lorem. Fugiat culpa anim qui aliquip ex aliqua eu ea ullamco elit Lorem incididunt amet. Officia ea fugiat mollit ipsum ad ad duis magna voluptate velit laborum. Culpa dolore aute amet do dolor. Adipisicing eu consectetur duis dolor sint.\r\n',
					},
					{
						id: '6362550743fc86e524183185',
						user: {
							id: '636255073f6cd6dfb4dc531a',
							name: 'Craft Waters',
						},
						text: 'Labore fugiat et aute ut esse nisi incididunt est reprehenderit pariatur velit laboris incididunt enim. Culpa duis enim sit ea magna elit incididunt nulla tempor sint velit ut. Magna nostrud aliquip ea exercitation consequat officia ad ipsum laboris ut et.\r\n',
					},
					{
						id: '636255072fb420446e88c829',
						user: {
							id: '63625507a383ce8a994bad7e',
							name: 'Viola Woodard',
						},
						text: 'Veniam sunt elit exercitation velit ea sunt cillum. Ex proident veniam consequat elit esse adipisicing sit anim. Nulla anim excepteur tempor minim laboris irure officia veniam non cillum enim duis pariatur id. Dolor incididunt esse incididunt veniam elit.\r\n',
					},
					{
						id: '63625507608a952cec46d54b',
						user: {
							id: '63625507774652e78bf36ada',
							name: 'Hicks Puckett',
						},
						text: 'Laboris ipsum eu laboris officia ad proident. Dolore enim ullamco labore sunt enim reprehenderit in enim. Ipsum occaecat officia aliquip nisi commodo consequat sint occaecat occaecat. Incididunt nostrud ut exercitation veniam amet cupidatat labore consequat ad officia et ipsum nisi aliqua.\r\n',
					},
				],
			},
			{
				id: '6362550720c06e2da656987d',
				name: 'pariatur',
				author: 'Bettie Glass',
				genre: 'nulla',
				price: 894,
				annotation:
					'Commodo do deserunt sunt non incididunt eiusmod non aliqua magna. Proident labore amet id tempor ullamco velit culpa ex nostrud esse tempor laborum. Amet quis exercitation nulla proident enim. Velit laborum incididunt est ea nisi consectetur culpa incididunt qui ex ex amet officia eu.\r\nAliqua culpa incididunt ea esse laboris ullamco velit esse consectetur ipsum minim id aliquip. Reprehenderit officia dolore magna consectetur. Minim ut aliquip fugiat commodo ut fugiat enim qui reprehenderit nulla minim exercitation minim. Laboris minim excepteur sint dolor et ad id reprehenderit eiusmod in aute. Lorem Lorem anim sit velit qui enim laboris sit incididunt et consequat anim.\r\n',
				reviews: [
					{
						id: '63625507224ea13b85d9fd1b',
						user: {
							id: '6362550792283a68a552e8e9',
							name: 'White Dejesus',
						},
						text: 'Velit sint aute eu fugiat non commodo cillum in quis commodo occaecat do. Commodo esse eiusmod consequat consequat duis adipisicing dolore duis enim ea amet ex. Sint dolore id laborum sunt nulla sit nostrud nulla duis culpa. Esse ullamco labore elit deserunt consequat deserunt pariatur et ullamco duis eiusmod. Tempor elit sit sit laborum duis ea cupidatat est dolore est ut. Sunt proident Lorem pariatur mollit do consectetur amet dolor. Est fugiat tempor sit qui exercitation voluptate deserunt velit excepteur eu.\r\n',
					},
					{
						id: '63625507255722967293a033',
						user: {
							id: '636255072c09a1724e4a17a6',
							name: 'Barber Alford',
						},
						text: 'Proident culpa anim anim ut aliqua cupidatat in cillum mollit culpa velit eu ut duis. Minim dolore et ipsum qui reprehenderit amet sit fugiat. Sint minim est voluptate duis nostrud nulla consequat nulla velit reprehenderit consequat ut. Cillum incididunt et sit in incididunt incididunt amet esse Lorem ullamco. Dolor ullamco Lorem enim labore sit duis. Fugiat exercitation amet ea nisi commodo et minim ea. Nulla non duis ipsum consectetur.\r\n',
					},
					{
						id: '636255079304dcfea9d90747',
						user: {
							id: '6362550792c36965ac2ff0fc',
							name: 'Linda Villarreal',
						},
						text: 'Adipisicing ullamco duis fugiat ex id consectetur cupidatat ipsum cupidatat. Enim Lorem exercitation ex consequat sunt mollit deserunt. Laboris aliquip magna sit adipisicing Lorem sunt Lorem nulla sit. Ad commodo ipsum veniam ipsum excepteur consequat veniam. Cupidatat qui minim qui aliquip irure tempor laboris fugiat aliquip. Proident minim consequat aliquip ipsum ut excepteur dolore est excepteur incididunt. Proident sunt officia nulla magna nostrud culpa elit.\r\n',
					},
					{
						id: '63625507d346e755b094df4c',
						user: {
							id: '63625507f8b343b184bccc3b',
							name: 'Rosalyn Oliver',
						},
						text: 'Qui elit veniam nulla ut id mollit ea reprehenderit et tempor deserunt. Aute ullamco laborum esse esse incididunt excepteur magna reprehenderit officia. Dolor nulla nisi consectetur id ullamco nulla pariatur laborum mollit ad.\r\n',
					},
				],
			},
			{
				id: '6362550713a61c95c915f7f5',
				name: 'aute',
				author: 'Heidi Wilkerson',
				genre: 'occaecat',
				price: 308,
				annotation:
					'Ad nulla aliquip ex ullamco ut pariatur excepteur enim elit fugiat ipsum. Ex incididunt anim pariatur et velit quis consectetur. Nostrud mollit ex proident mollit laboris ad et sint deserunt ex do tempor sit excepteur. Quis qui Lorem dolor velit est amet elit duis fugiat in sit commodo duis. Pariatur est eiusmod et laboris nulla adipisicing proident enim id elit. Nisi eu quis non pariatur sit veniam dolore esse nostrud incididunt enim tempor ipsum. Nostrud veniam anim enim anim irure incididunt.\r\nVeniam proident non mollit magna. Amet velit exercitation officia dolore ut labore non veniam sit. Ad pariatur mollit voluptate culpa minim et veniam ullamco.\r\n',
				reviews: [
					{
						id: '63625507c97fd6a40100ac7e',
						user: {
							id: '63625507db0defb3e5b1dee1',
							name: 'Ellison Marks',
						},
						text: 'Nisi officia deserunt culpa ipsum eu qui. Ea in sit incididunt aute eiusmod sit cillum velit. Consequat ea voluptate commodo anim eiusmod ex cillum non ex ipsum. Tempor quis anim consequat ad magna dolor ad reprehenderit irure Lorem nulla anim et dolor. Esse officia elit commodo elit ea officia aliquip deserunt labore sint et labore magna velit. Excepteur commodo Lorem ad proident eiusmod laboris veniam.\r\n',
					},
					{
						id: '63625507a5543563702d8454',
						user: {
							id: '63625507987662ae270a767b',
							name: 'Antonia Marshall',
						},
						text: 'Adipisicing sit aliquip amet officia officia nisi. Nulla tempor cillum velit deserunt nisi ea et sit magna aliqua cillum non elit dolore. Consectetur quis reprehenderit nulla minim magna cillum deserunt Lorem ea veniam fugiat. Sint nulla laborum reprehenderit aliquip duis eu dolor dolore deserunt quis adipisicing. Aliquip non elit aute est excepteur excepteur aliqua amet laboris quis ea proident excepteur fugiat. Proident sunt mollit irure incididunt exercitation ea occaecat sunt sint cillum.\r\n',
					},
					{
						id: '63625507f3de2dd76e5ae5ca',
						user: {
							id: '63625507305c4d479100f8bf',
							name: 'Adrian Mcgee',
						},
						text: 'Duis excepteur veniam laboris dolore reprehenderit dolore ea. Do Lorem sit consequat consectetur sint aliquip commodo ad irure mollit. Veniam nisi non nostrud duis id velit eiusmod nisi consectetur velit magna. Id pariatur tempor sit nostrud anim anim ipsum occaecat ad laboris labore labore mollit consectetur. Duis anim sit nisi irure. Id culpa exercitation Lorem duis aliquip laboris commodo velit sit reprehenderit. Excepteur amet nisi cupidatat cupidatat magna officia magna proident.\r\n',
					},
					{
						id: '636255078a98caa0a214be13',
						user: {
							id: '63625507fc3d100f1c610613',
							name: 'Shannon William',
						},
						text: 'Pariatur eu proident nulla non tempor nulla aute. Et culpa cupidatat ullamco eiusmod. Minim qui magna cillum aute cillum laborum voluptate. Cillum proident ut aliquip eu sunt mollit eiusmod ullamco mollit velit culpa sunt reprehenderit cupidatat. Pariatur ad sit dolor elit ad officia amet ex quis sunt cupidatat dolor laborum adipisicing.\r\n',
					},
					{
						id: '636255075a31d7ee5b8f81e7',
						user: {
							id: '636255075c200cbd0b9a9005',
							name: 'Sarah Stanton',
						},
						text: 'Exercitation ex minim veniam magna esse ut Lorem dolore veniam officia reprehenderit velit. Cupidatat Lorem ipsum proident exercitation mollit. Amet pariatur nostrud pariatur aute esse. Ea irure dolor qui labore reprehenderit labore tempor. Aute consectetur velit voluptate ea laboris officia ipsum. Officia adipisicing dolor mollit anim mollit ut officia pariatur deserunt cupidatat. Commodo culpa aliqua id commodo et elit.\r\n',
					},
					{
						id: '63625507caa29b9b72ea79fc',
						user: {
							id: '6362550714eeeea99afb20d1',
							name: 'Webb Ford',
						},
						text: 'Aute eu quis veniam eiusmod quis quis incididunt consequat amet anim ipsum mollit dolore ex. Fugiat tempor ea magna Lorem laborum laborum sit aute. Qui eu exercitation Lorem qui dolore id incididunt minim ex sit nostrud voluptate duis quis. Ut incididunt sint incididunt nisi adipisicing et do sint commodo labore Lorem minim veniam do. Cupidatat et laborum dolor fugiat anim eu.\r\n',
					},
					{
						id: '636255071950c14170d40ad0',
						user: {
							id: '63625507b1e5dba2975743b0',
							name: 'Daphne Simon',
						},
						text: 'Ex minim dolore occaecat laboris minim consectetur in ea cupidatat duis laborum aliqua excepteur. Mollit consectetur non ex reprehenderit anim do est laborum velit ex elit ullamco. Aliquip qui labore minim Lorem do tempor duis est laboris dolor voluptate do. Commodo aliqua deserunt ad elit. Eiusmod ea laborum veniam proident sit magna.\r\n',
					},
				],
			},
		],
	},
	{
		id: '6362550770f6dd0f2d6be764',
		name: 'Учебная литература',
		books: [
			{
				id: '636255070db761fa5c931d36',
				name: 'irure',
				author: 'Josefa Knowles',
				genre: 'nisi',
				price: 497,
				annotation:
					'Velit voluptate sint laborum eu pariatur. Fugiat dolor ad sunt reprehenderit sunt sit in culpa. Laborum eu qui elit ut reprehenderit in duis fugiat culpa enim velit. Est elit cillum amet amet reprehenderit consectetur dolore occaecat veniam excepteur do quis ex voluptate. Tempor amet id laborum eiusmod culpa aliquip enim cillum cupidatat fugiat irure duis labore consectetur.\r\nEsse duis incididunt dolore deserunt minim eu quis. Officia pariatur nulla cupidatat exercitation cillum qui eu adipisicing amet ipsum nostrud dolore. Pariatur culpa sunt proident est excepteur officia sunt occaecat velit cillum elit duis ut.\r\n',
				reviews: [
					{
						id: '63625507db30efa9aa4d38ea',
						user: {
							id: '63625507ceb24d5cd062892f',
							name: 'Rhodes Anthony',
						},
						text: 'Veniam exercitation exercitation pariatur velit consequat sit non in eiusmod in aliquip ullamco laboris ut. Duis elit eu ad consectetur esse incididunt. Cillum dolore anim dolor minim qui consequat nisi pariatur duis do culpa incididunt minim.\r\n',
					},
					{
						id: '636255079f54581c1325ad5a',
						user: {
							id: '63625507dadb6aefd6fc98cd',
							name: 'Georgette French',
						},
						text: 'Nulla elit irure non sunt aliquip id enim excepteur voluptate ad in dolor nostrud velit. Aliqua Lorem fugiat ea qui. Qui ex nisi proident cupidatat ad duis enim ex consequat. Laborum amet enim sunt incididunt culpa. Fugiat Lorem sit exercitation eiusmod nostrud elit exercitation. Officia nulla consectetur sint aliquip do laboris laboris magna dolore dolore esse laborum pariatur.\r\n',
					},
					{
						id: '63625507a67fad513f57219d',
						user: {
							id: '63625507f02a7911b8fb1d0e',
							name: 'Ruthie Chandler',
						},
						text: 'Sint dolor sint minim minim culpa elit. Voluptate laborum sunt consectetur proident quis. Ad qui aliquip consequat reprehenderit cupidatat. Id ad irure eu cupidatat elit eu adipisicing quis pariatur aliqua incididunt quis nulla. Laborum est deserunt commodo sit consequat qui pariatur nisi commodo irure. Id anim deserunt ad velit nisi ea minim.\r\n',
					},
					{
						id: '6362550736e922c3679d6f7e',
						user: {
							id: '63625507aba8d12dc3873f6a',
							name: 'Blackwell Sharpe',
						},
						text: 'Aliqua minim ex est aliqua Lorem eiusmod labore aliquip. Dolore velit Lorem amet ex non voluptate do est ullamco velit eiusmod consequat. Sunt nostrud quis magna veniam officia dolore voluptate id. Fugiat veniam amet aute elit ipsum labore cillum anim laboris aliquip sint in enim. Ad duis irure voluptate elit velit.\r\n',
					},
					{
						id: '63625507b6832bdfef3b643e',
						user: {
							id: '63625507025e1ff58bd78708',
							name: 'Casey Kinney',
						},
						text: 'Fugiat aliquip quis eu sunt culpa dolor sint deserunt in officia sunt culpa ex. Mollit id officia laboris cupidatat adipisicing exercitation ex laborum aute irure laboris ipsum culpa laboris. Consectetur ex aliqua eiusmod cupidatat ullamco officia velit consectetur voluptate mollit. Ad dolore amet enim consectetur sit laborum sint non mollit ut. Occaecat non tempor officia amet nisi dolor dolore pariatur voluptate aliqua ad amet. Labore est eiusmod dolore velit est non ad laborum consectetur.\r\n',
					},
				],
			},
			{
				id: '63625507257b7f961140b642',
				name: 'aute',
				author: 'Merle Gutierrez',
				genre: 'minim',
				price: 573,
				annotation:
					'Qui ad proident esse irure do culpa ex irure est. Ullamco laboris sit anim ad dolor consectetur proident elit qui anim eu ut veniam duis. Id commodo excepteur non reprehenderit esse in do occaecat elit adipisicing dolore. Esse est pariatur cupidatat laborum velit cillum nostrud commodo aute aliquip anim ex enim.\r\nConsectetur sit fugiat et laborum. Qui culpa enim consectetur aute incididunt pariatur cupidatat officia aliquip nostrud dolore voluptate eu in. Ullamco voluptate sunt et incididunt consectetur amet. Laborum amet sint sit elit ullamco esse velit.\r\n',
				reviews: [
					{
						id: '63625507c5906474ce29c894',
						user: {
							id: '636255072557266c3e55e6c6',
							name: 'Mcdaniel Petersen',
						},
						text: 'Enim laborum voluptate commodo id laborum nulla excepteur ea irure officia fugiat tempor. Cupidatat fugiat mollit irure ipsum excepteur enim veniam aute voluptate amet. Labore sunt ut commodo officia quis incididunt. Quis cillum ullamco aliquip occaecat do sit enim in adipisicing enim commodo exercitation culpa incididunt. Deserunt nostrud irure voluptate nisi cupidatat laboris culpa nulla adipisicing amet. Ad ea deserunt ex culpa aliquip pariatur.\r\n',
					},
					{
						id: '636255078f0610cd0564e5a1',
						user: {
							id: '636255079290f200d73a3a11',
							name: 'Walsh Palmer',
						},
						text: 'Do pariatur exercitation anim officia incididunt aliquip eu quis irure. Duis ipsum duis cupidatat dolore cupidatat magna. Eu ullamco incididunt culpa laboris labore irure elit nostrud laborum incididunt. Eu esse laborum proident do sit incididunt aliqua ut voluptate nisi ut reprehenderit adipisicing.\r\n',
					},
				],
			},
			{
				id: '6362550738ace0f1265eddcb',
				name: 'aute',
				author: 'Gretchen Jones',
				genre: 'aliqua',
				price: 265,
				annotation:
					'Quis aute culpa ex sint magna ipsum. Ex duis do irure eiusmod sit. Aliqua consequat reprehenderit aute magna nulla laboris pariatur nulla ullamco. Esse nisi laborum in mollit esse duis nostrud sunt aute. Fugiat nostrud enim aute dolore dolore ut aliqua consequat qui. Adipisicing minim et esse non eiusmod velit ullamco cillum do sit nostrud aliqua voluptate.\r\nAdipisicing deserunt adipisicing non fugiat. Dolore non amet laboris consequat non non pariatur do. Duis dolor sit anim proident est laboris consequat nisi labore. Pariatur exercitation non sit consequat sit quis occaecat nulla deserunt officia ad commodo. Fugiat sint enim dolore aliqua aute aliqua voluptate occaecat veniam velit.\r\n',
				reviews: [
					{
						id: '63625507862f948011f56f94',
						user: {
							id: '636255070f77a6a96b895953',
							name: 'Vinson Donaldson',
						},
						text: 'Voluptate consequat consectetur et incididunt quis sit laborum ea ut. Aute dolore adipisicing enim incididunt sint eu tempor. Ex proident laboris eu culpa occaecat occaecat exercitation adipisicing. Laborum deserunt ut fugiat adipisicing proident cupidatat dolor qui tempor eu. Incididunt deserunt nisi proident consequat esse officia adipisicing ad.\r\n',
					},
					{
						id: '636255072db8b37cc0725703',
						user: {
							id: '63625507780689809a89b434',
							name: 'Katelyn Parks',
						},
						text: 'Veniam aliqua aliqua irure occaecat elit ut velit ullamco aliquip quis magna elit. Non irure eu occaecat Lorem dolore eiusmod. Laborum deserunt ex duis nisi labore consectetur sunt et nostrud reprehenderit consequat voluptate do ullamco. Mollit aute mollit laborum amet id proident est amet cupidatat ea fugiat. Amet incididunt ipsum in tempor eu minim incididunt ut aliquip magna ipsum aliqua exercitation minim. Culpa tempor officia in proident enim laboris consequat nulla. Sunt laborum ad Lorem laborum est nulla nostrud officia duis cillum laborum.\r\n',
					},
					{
						id: '636255072c81166932b70bb3',
						user: {
							id: '63625507fce9a144d64d6a78',
							name: 'Maggie Hahn',
						},
						text: 'Consequat ipsum non aliqua et ipsum. Eiusmod aliquip consequat duis deserunt esse anim esse est ullamco id sint. Nisi ut ipsum non laborum qui ullamco aliquip tempor incididunt enim voluptate enim. Proident cillum irure voluptate pariatur anim veniam.\r\n',
					},
					{
						id: '636255077d876da17425ee7f',
						user: {
							id: '636255079f69833af70cd399',
							name: 'Weiss Harmon',
						},
						text: 'Mollit non tempor excepteur commodo irure consectetur nulla nisi adipisicing minim esse ipsum eu. Non quis irure qui sunt aute non amet mollit excepteur tempor aliquip nisi. Aute ex sint enim velit duis. Officia nostrud non minim ex ut duis minim irure.\r\n',
					},
					{
						id: '636255079027713e4d538ce8',
						user: {
							id: '636255070eb7139f868dd069',
							name: 'Hillary Boone',
						},
						text: 'Commodo culpa commodo voluptate quis commodo qui esse officia minim. Proident sunt eu aute sunt cillum ad occaecat tempor do adipisicing officia. Officia aliquip nulla laborum qui commodo nulla aute. Minim duis mollit excepteur in eu excepteur deserunt aute esse non ea Lorem. Sit adipisicing cupidatat mollit velit ut do voluptate anim. Sunt in tempor deserunt ipsum.\r\n',
					},
					{
						id: '63625507ac8942b42a575536',
						user: {
							id: '63625507e517f3ddb448dd7a',
							name: 'Jamie Grant',
						},
						text: 'Exercitation ipsum fugiat dolor elit dolor fugiat dolor duis aute dolor. Tempor dolore ea dolore voluptate tempor cupidatat deserunt consectetur tempor. Sint veniam reprehenderit aute elit. Voluptate adipisicing deserunt tempor nostrud nostrud exercitation anim adipisicing incididunt aliquip occaecat proident exercitation culpa.\r\n',
					},
					{
						id: '6362550738c71857b4ec43a4',
						user: {
							id: '636255070ff2a1b11b1dd354',
							name: 'Brown Meyers',
						},
						text: 'Culpa qui nulla incididunt excepteur. Magna excepteur aute eiusmod et. Velit ullamco esse tempor pariatur quis sunt. Sint id occaecat nisi tempor incididunt. Eu mollit velit sit quis officia dolor officia non dolor proident sit consequat cupidatat laboris. Labore labore dolor eu ad nisi aute. Laboris minim eiusmod ea id magna reprehenderit ad.\r\n',
					},
				],
			},
			{
				id: '6362550738a98295ebbb22b9',
				name: 'ipsum',
				author: 'Della Mitchell',
				genre: 'ut',
				price: 574,
				annotation:
					'Dolor et Lorem velit enim. Veniam ut ullamco excepteur exercitation labore reprehenderit culpa mollit. Nulla reprehenderit cillum nulla culpa labore exercitation consequat cillum pariatur eu labore occaecat.\r\nCillum aute irure ullamco incididunt Lorem culpa sunt fugiat. Aliquip proident deserunt laborum esse. Sint fugiat ipsum commodo veniam reprehenderit exercitation laborum occaecat amet aliquip. Tempor magna laborum sit sint ex ipsum cillum quis proident consequat culpa ut veniam. Aliquip officia dolor velit pariatur do anim enim Lorem enim. Elit culpa aliquip velit sunt ad ea deserunt irure eiusmod consequat minim consequat esse.\r\n',
				reviews: [
					{
						id: '636255076a3e6a61c9a05ffa',
						user: {
							id: '636255076a5ce7ee8d64294f',
							name: 'Hollie Mcintyre',
						},
						text: 'Id anim fugiat eiusmod id eu elit veniam aliqua veniam labore aliquip aliqua magna mollit. Et anim culpa ut sit fugiat ea. Mollit nulla excepteur eiusmod minim proident incididunt laborum sit enim fugiat tempor pariatur aute. Veniam dolore duis consectetur nisi incididunt eiusmod ullamco duis est veniam laboris. Cillum esse duis deserunt quis ipsum.\r\n',
					},
					{
						id: '636255078a524e526222169a',
						user: {
							id: '6362550702720dcac3e4d87a',
							name: 'Brianna Hatfield',
						},
						text: 'Nulla sint in qui proident cupidatat elit laborum quis. In in est sunt culpa ullamco occaecat nisi enim. Incididunt laborum eiusmod exercitation commodo sint esse ullamco reprehenderit minim.\r\n',
					},
				],
			},
			{
				id: '6362550769d5f31a1bddcf9d',
				name: 'est',
				author: 'Opal Cruz',
				genre: 'nostrud',
				price: 551,
				annotation:
					'Minim enim enim exercitation irure et pariatur Lorem consequat ullamco deserunt elit pariatur sunt. Sint tempor proident commodo commodo. Aliquip deserunt nisi exercitation sit. Sit do mollit commodo amet id et nisi incididunt veniam enim. Sunt sunt adipisicing enim reprehenderit eiusmod dolor consectetur esse. Lorem cillum non Lorem non ex incididunt excepteur aute reprehenderit cupidatat minim sunt commodo anim.\r\nMagna nostrud laboris reprehenderit nostrud. Enim minim nulla occaecat quis culpa nisi amet quis. Irure pariatur tempor ullamco eiusmod officia reprehenderit deserunt cupidatat. Dolore dolor occaecat adipisicing ea enim qui ut esse elit. Fugiat cillum labore commodo proident elit commodo reprehenderit. Labore exercitation adipisicing labore consectetur adipisicing quis reprehenderit occaecat veniam elit minim nisi in ex.\r\n',
				reviews: [
					{
						id: '636255070f9e24264cf37f79',
						user: {
							id: '636255073fc9164935714af7',
							name: 'Catherine Lee',
						},
						text: 'Velit velit excepteur qui mollit nisi adipisicing culpa velit est reprehenderit mollit excepteur. Commodo cillum cillum irure occaecat proident nulla. Id incididunt et eu dolor commodo culpa. Anim sint elit culpa exercitation excepteur incididunt in adipisicing aliqua. Exercitation tempor velit esse id eu elit aute eu ad ea exercitation.\r\n',
					},
					{
						id: '63625507efda4345741378f4',
						user: {
							id: '6362550761b2bbf48d5d2c02',
							name: 'Jill Brady',
						},
						text: 'Non et nisi qui ea et duis officia. Dolor ut aliqua cillum et quis. Nulla occaecat pariatur ad ipsum veniam adipisicing ipsum fugiat sint sint fugiat.\r\n',
					},
					{
						id: '63625507d2412f0f2215319b',
						user: {
							id: '63625507242b9e069d5e35ed',
							name: 'Kristine Cortez',
						},
						text: 'Anim voluptate magna velit eiusmod consectetur adipisicing non commodo laborum ullamco anim tempor enim. Eu magna esse consequat pariatur esse sit. Nisi veniam amet culpa veniam deserunt mollit enim ea est. Sunt mollit labore nisi sint commodo laboris ad minim duis consequat Lorem aliqua voluptate cillum.\r\n',
					},
				],
			},
			{
				id: '636255075d0a8f305dcb9a63',
				name: 'officia',
				author: 'Ashley Donovan',
				genre: 'culpa',
				price: 556,
				annotation:
					'Id dolore veniam officia ex ea id veniam laborum proident deserunt dolor anim velit. Elit aliquip elit enim ullamco culpa sit. Laborum ullamco amet sunt cillum deserunt culpa et anim deserunt. Officia exercitation veniam elit tempor ullamco sint. Officia aliqua dolore qui enim deserunt exercitation consequat aute nostrud tempor voluptate do excepteur. Qui consectetur reprehenderit tempor est deserunt officia nostrud culpa in laborum reprehenderit reprehenderit.\r\nLaborum Lorem id tempor veniam ullamco aliqua. Enim exercitation voluptate ad laborum in sit sunt laborum nisi non ullamco laborum enim labore. Amet eiusmod veniam adipisicing adipisicing eu sint consequat. Excepteur voluptate id fugiat veniam ea officia commodo enim officia ex nulla.\r\n',
				reviews: [
					{
						id: '6362550718ce50da8a6a944a',
						user: {
							id: '636255073fcd3b5f828fa800',
							name: 'Coffey Vargas',
						},
						text: 'Exercitation exercitation qui amet labore labore quis occaecat nulla velit. Duis consectetur cupidatat reprehenderit amet ut. Cupidatat aliquip veniam officia consequat adipisicing velit eu voluptate veniam non consequat. Duis nostrud duis culpa labore proident labore ipsum amet labore veniam laboris ipsum veniam do. Dolor nisi duis commodo commodo ea. Ullamco cupidatat ea sint labore tempor incididunt ea esse anim dolor dolor tempor laborum.\r\n',
					},
					{
						id: '636255073e726d56d12c306f',
						user: {
							id: '636255075997ba9fff3a81c9',
							name: 'Cortez Holland',
						},
						text: 'Dolore cupidatat nostrud labore dolore. Culpa magna nulla voluptate ad commodo sit aute quis reprehenderit reprehenderit. Sint irure velit dolore dolore deserunt labore amet quis irure. Sunt adipisicing sunt qui exercitation in aute aliquip mollit consequat excepteur cillum. Lorem eu non velit nisi fugiat elit ad. Sit duis in proident qui velit aute cillum esse est irure labore aute id.\r\n',
					},
					{
						id: '6362550782dccc2bce26e828',
						user: {
							id: '6362550738a79939aac0251a',
							name: 'Elinor Harper',
						},
						text: 'Voluptate veniam anim deserunt ipsum eiusmod tempor tempor reprehenderit eu proident sit aute eiusmod. Excepteur labore non in cillum mollit aliqua officia. Est laborum laboris non enim. Anim enim sit quis qui voluptate. Laboris quis dolore qui tempor irure reprehenderit enim deserunt mollit occaecat sit. Tempor exercitation occaecat et duis culpa eu minim consequat aliqua consequat occaecat anim veniam.\r\n',
					},
					{
						id: '63625507a27c2eca6050b01e',
						user: {
							id: '63625507b1841e0c6699cb4c',
							name: 'Cantu Malone',
						},
						text: 'Velit adipisicing ea veniam quis ullamco enim. Quis labore dolore irure enim exercitation. Qui ipsum quis ullamco tempor laboris nisi ad laboris cupidatat cillum reprehenderit anim qui velit.\r\n',
					},
				],
			},
		],
	},
	{
		id: '63625507b7dda435494591fb',
		name: 'Комиксы',
		books: [
			{
				id: '6362550700e65fa88fd30b63',
				name: 'dolore',
				author: 'Baxter Hurley',
				genre: 'velit',
				price: 885,
				annotation:
					'Ad magna laborum Lorem id et culpa minim duis eiusmod nostrud. Fugiat ex minim Lorem sit cupidatat. Aute enim in in cupidatat dolor deserunt anim id dolore ut elit ullamco deserunt laborum.\r\nCillum minim dolor commodo aute. Nulla adipisicing sit anim consectetur velit. Irure do dolore sunt incididunt pariatur ipsum adipisicing consectetur proident amet deserunt enim ipsum id. Aute adipisicing ut velit elit velit esse magna cillum consequat. Nulla commodo occaecat in dolore esse sunt laboris aliqua nostrud. Reprehenderit dolore eu excepteur occaecat non excepteur qui esse exercitation nisi excepteur pariatur cupidatat.\r\n',
				reviews: [
					{
						id: '636255070a676c464f509c87',
						user: {
							id: '6362550780e57b33b5e1f322',
							name: 'Dotson Whitley',
						},
						text: 'Amet sit officia adipisicing ad. Non dolore anim voluptate proident quis consectetur nostrud veniam amet sit laborum qui est id. Amet ad nostrud quis elit nostrud quis adipisicing sit sit aliqua dolor non do. Officia occaecat aute et exercitation laborum excepteur ex irure culpa culpa minim. Veniam incididunt culpa quis proident.\r\n',
					},
					{
						id: '63625507d0f389c53a1afe75',
						user: {
							id: '63625507c8d5fe722edc0b55',
							name: 'Brittany Mckinney',
						},
						text: 'Excepteur consequat occaecat fugiat deserunt tempor dolore non. Tempor esse do minim aliqua consectetur ipsum minim Lorem et non eu deserunt consequat veniam. Reprehenderit eiusmod amet magna laborum Lorem pariatur amet aute consectetur do ullamco. Elit nulla non non elit dolor exercitation labore ipsum laboris. Consectetur ex officia mollit cupidatat esse eiusmod. Qui laborum et non culpa esse excepteur enim ad commodo eiusmod commodo excepteur esse.\r\n',
					},
					{
						id: '6362550750acb599ded1a960',
						user: {
							id: '63625507485fb000b425b2a3',
							name: 'Jewel English',
						},
						text: 'Labore laborum ea adipisicing exercitation laborum amet incididunt officia proident enim. Ea reprehenderit reprehenderit nisi est. Minim qui voluptate ea veniam mollit ut. Dolor tempor qui est sunt aute. Reprehenderit aute occaecat sit quis dolore esse ad. Nostrud et mollit est labore id quis aliquip commodo eu. Ipsum do nostrud velit consequat ea fugiat Lorem ex ad in deserunt officia.\r\n',
					},
					{
						id: '63625507593db58f6677919d',
						user: {
							id: '636255073de2ca938199fc57',
							name: 'Summers Maxwell',
						},
						text: 'Aliqua est nulla proident magna elit. Dolor non deserunt laboris laborum incididunt culpa mollit sunt velit irure elit veniam quis ad. Magna magna eiusmod fugiat magna incididunt adipisicing minim duis dolor id. Occaecat fugiat ipsum elit veniam deserunt aliquip minim exercitation voluptate incididunt elit non veniam.\r\n',
					},
				],
			},
			{
				id: '636255073501ab06b472dc40',
				name: 'veniam',
				author: 'Joyner Copeland',
				genre: 'deserunt',
				price: 618,
				annotation:
					'Commodo ullamco cillum consequat nisi. Enim labore commodo ut tempor esse fugiat sit eiusmod consequat id aliquip aliquip fugiat ex. Deserunt tempor magna ea reprehenderit aliquip adipisicing do aliquip sint. Aute duis sit dolore eiusmod cupidatat eu minim proident Lorem veniam nostrud id sit. Duis dolor consequat nulla proident cupidatat. Dolore dolore eu elit ullamco Lorem excepteur nisi.\r\nCulpa proident sit laborum cupidatat occaecat reprehenderit ipsum officia adipisicing dolor. Ex aute aute ex duis. In nulla nulla adipisicing laboris minim consectetur amet pariatur laboris ullamco duis. Culpa consequat cupidatat cillum eiusmod magna commodo consequat velit excepteur aliqua dolor labore officia reprehenderit.\r\n',
				reviews: [
					{
						id: '636255073335a88c2df2b48d',
						user: {
							id: '6362550730bbdcc2ce0185f8',
							name: 'Ava Sims',
						},
						text: 'Elit incididunt fugiat sit nisi. Elit voluptate ut exercitation non. Amet est ex do dolor pariatur mollit veniam minim consequat esse.\r\n',
					},
					{
						id: '63625507e2406b58f786e1c5',
						user: {
							id: '63625507eb7f52bcc0c1facf',
							name: 'Hoover Eaton',
						},
						text: 'Veniam amet nulla nisi incididunt exercitation qui incididunt excepteur do incididunt. Laboris tempor ea commodo pariatur amet incididunt. In pariatur laborum eiusmod ipsum consectetur ea. Sit cupidatat aliqua duis consequat eiusmod pariatur est irure velit consectetur laboris.\r\n',
					},
					{
						id: '636255077c8aeee8c3744bf5',
						user: {
							id: '63625507bbccd87e9abe876b',
							name: 'Maxine Gay',
						},
						text: 'Ad officia veniam exercitation ullamco irure. Est sunt ad aliquip dolor dolor labore cillum. Veniam in irure veniam pariatur proident et et. Anim labore sunt ullamco consectetur pariatur sunt est eiusmod eu. Exercitation cupidatat mollit laboris aliquip velit occaecat elit fugiat aliqua eiusmod.\r\n',
					},
					{
						id: '636255074dca384977b1b1a6',
						user: {
							id: '63625507d208f8648b7a9eeb',
							name: 'Eve Rosario',
						},
						text: 'Eu fugiat dolor mollit non laboris. Cupidatat deserunt reprehenderit velit quis sint ullamco est culpa incididunt. Labore occaecat ipsum ut consectetur deserunt. Tempor voluptate excepteur qui occaecat culpa est nisi sit ad magna ex aliqua dolore ex. Nulla esse nulla laboris deserunt quis excepteur veniam tempor.\r\n',
					},
				],
			},
			{
				id: '636255072761685017bb5e62',
				name: 'mollit',
				author: 'Macias Carpenter',
				genre: 'ut',
				price: 746,
				annotation:
					'Laborum fugiat nostrud aliquip cillum cillum elit laborum sit incididunt. Sunt minim culpa id sit. Nulla occaecat magna ut tempor.\r\nSit mollit magna mollit sint magna Lorem qui. Eiusmod sint sit esse magna in eiusmod. Proident eu consequat laboris commodo exercitation mollit incididunt quis. Aliquip irure cupidatat irure consectetur nostrud commodo eiusmod ullamco fugiat Lorem minim pariatur. Dolore amet ex nulla eiusmod. Pariatur laborum cupidatat commodo ullamco nisi pariatur irure enim ad incididunt nostrud dolor est. Incididunt deserunt dolor incididunt cupidatat reprehenderit tempor aliqua duis ea.\r\n',
				reviews: [
					{
						id: '636255073ca4a79f4701570b',
						user: {
							id: '636255070c11cb8e247090b1',
							name: 'Salazar Cochran',
						},
						text: 'Dolor est amet excepteur reprehenderit non anim commodo enim occaecat deserunt enim. Anim consequat laborum minim ipsum aliqua tempor sunt duis pariatur quis et duis. Incididunt dolore sit elit reprehenderit laborum deserunt. Dolor amet laborum anim nulla amet laborum ex excepteur velit quis sint magna pariatur occaecat. Tempor incididunt culpa nisi veniam dolore. Duis sit eu incididunt reprehenderit aute et enim fugiat quis enim veniam reprehenderit.\r\n',
					},
					{
						id: '6362550792e1cecb8f02c5e2',
						user: {
							id: '636255079292a216e008bf81',
							name: 'Gwen Conley',
						},
						text: 'Dolore quis laboris exercitation duis et do aliquip sint elit incididunt. Incididunt mollit exercitation ipsum ut culpa. Nulla esse excepteur nisi ipsum culpa dolor quis do est cupidatat sunt sit. Dolor et occaecat sunt nisi fugiat dolor adipisicing. Fugiat amet sunt sint ut pariatur.\r\n',
					},
					{
						id: '63625507c976604142366379',
						user: {
							id: '6362550750cbf25203c528e5',
							name: 'Alston Buchanan',
						},
						text: 'Quis dolore amet ullamco anim ullamco do cupidatat. Eu laboris deserunt duis amet exercitation irure cillum irure cupidatat est ullamco consequat ut. Ad voluptate amet in sunt sint irure esse exercitation minim reprehenderit. Anim occaecat esse sint et. Consequat elit laboris ipsum sint magna dolore. Nisi laborum id dolor aliqua excepteur cupidatat consequat mollit dolore eiusmod eiusmod nostrud minim labore. Aliquip enim nostrud adipisicing eiusmod qui proident.\r\n',
					},
				],
			},
			{
				id: '6362550799b9ac447cb5e64b',
				name: 'magna',
				author: 'Estella Young',
				genre: 'ipsum',
				price: 916,
				annotation:
					'Nulla laborum reprehenderit nostrud ea velit elit ex veniam tempor consequat deserunt labore enim cupidatat. Sint aliquip anim elit velit proident. Officia proident reprehenderit ex do mollit velit sint ad ad elit. Nostrud deserunt culpa commodo excepteur eu in. Sit do non duis commodo adipisicing labore sint incididunt. Minim Lorem amet ullamco ut eiusmod ex culpa labore dolore mollit enim irure ad. Veniam consequat velit adipisicing ullamco est voluptate esse.\r\nCillum qui exercitation ullamco ipsum eu ipsum deserunt in magna consectetur. Commodo aliqua deserunt velit labore est. Nisi proident enim minim dolore mollit dolore incididunt laborum deserunt dolore aliqua eu cupidatat amet. Commodo elit reprehenderit sint laboris ad do voluptate laboris fugiat irure id occaecat pariatur. Occaecat incididunt commodo culpa anim in amet tempor minim minim quis est cupidatat quis. Eu et commodo ut sit sint. Exercitation aliqua occaecat nostrud sint excepteur sint sit qui et veniam.\r\n',
				reviews: [
					{
						id: '6362550763ac8d25a8e2b43c',
						user: {
							id: '63625507ee9be8e8b89ee55b',
							name: 'Virgie Mcgowan',
						},
						text: 'Labore ut anim eu tempor do tempor ipsum ex voluptate laboris cupidatat proident excepteur. Id dolor in ipsum ut laborum ea fugiat cillum nostrud mollit. Laboris exercitation minim adipisicing laboris est. Mollit cillum nulla exercitation proident laboris deserunt amet exercitation ipsum deserunt ut esse enim. Consectetur adipisicing culpa voluptate aliquip velit voluptate Lorem minim esse laboris deserunt commodo in.\r\n',
					},
					{
						id: '63625507d9035f8808171a87',
						user: {
							id: '636255078f3f197f3ea5fcfd',
							name: 'Scott Bowers',
						},
						text: 'Ad ex voluptate elit do nisi eiusmod culpa laboris anim magna dolore laborum magna. Tempor id anim enim ex nulla officia duis est. Magna pariatur aliqua laboris irure incididunt do do ullamco et irure est. Ut ipsum aute aliquip in aliqua ullamco exercitation velit nisi.\r\n',
					},
				],
			},
			{
				id: '636255077f8153c70bd756a2',
				name: 'excepteur',
				author: 'Christian Reese',
				genre: 'nisi',
				price: 785,
				annotation:
					'Quis reprehenderit veniam ut mollit in. Culpa est tempor magna sunt sint cillum. Proident mollit elit in nulla sit sint eu ex labore. Sunt esse duis excepteur exercitation aliqua ex ullamco ea sit. Elit aute consectetur anim ullamco.\r\nElit aliqua proident adipisicing Lorem culpa in incididunt culpa ad quis cupidatat ipsum esse non. Ipsum id esse do irure magna anim cillum laborum consectetur cupidatat anim. Est do duis cupidatat laboris magna sunt sit magna ex nisi ex eu occaecat. Dolore nisi veniam tempor non tempor sit duis deserunt aliqua. Dolor fugiat ex adipisicing pariatur fugiat cillum laborum.\r\n',
				reviews: [
					{
						id: '6362550743fa0f98d2af3ff1',
						user: {
							id: '6362550706f2853f1ece41e0',
							name: 'Lila Odom',
						},
						text: 'Tempor sit do veniam in officia nisi anim id officia deserunt dolor. Non ea deserunt voluptate do laborum quis esse. Veniam voluptate pariatur tempor anim eu amet. In id reprehenderit ut Lorem anim consequat excepteur ullamco pariatur officia.\r\n',
					},
					{
						id: '636255074bfc1fa2e0ce3c3f',
						user: {
							id: '636255074e3e609737be1c07',
							name: 'Edith Morin',
						},
						text: 'Amet eu eu qui magna ut sunt labore aliqua. Adipisicing pariatur ut veniam nostrud voluptate ut occaecat fugiat id duis. Est dolore nulla excepteur eu et sit anim ut. Dolor elit dolor esse anim pariatur nostrud excepteur anim quis laborum ex ut ullamco. Eiusmod minim commodo ex voluptate.\r\n',
					},
					{
						id: '63625507071208523517cbd9',
						user: {
							id: '6362550738141a1520abaec9',
							name: 'Julie Bruce',
						},
						text: 'Incididunt nostrud incididunt non consectetur sunt tempor culpa irure. Non nulla amet dolor consequat nostrud in laboris dolore est ut aliquip aute. Ullamco dolor irure velit ex Lorem laborum dolor tempor magna eiusmod cillum Lorem officia. Sit elit culpa in ullamco adipisicing ut laboris tempor elit eiusmod laborum amet. Tempor laboris quis sint tempor ex reprehenderit nulla mollit veniam excepteur occaecat mollit ea pariatur. Nisi irure dolor dolor cupidatat anim deserunt.\r\n',
					},
				],
			},
			{
				id: '63625507a82df74556f2ca8c',
				name: 'consectetur',
				author: 'Benson Burke',
				genre: 'minim',
				price: 683,
				annotation:
					'Do labore consequat ullamco quis laborum magna magna Lorem et ipsum deserunt non reprehenderit labore. Veniam minim ipsum nostrud quis irure minim minim magna exercitation minim do deserunt cupidatat. Deserunt minim aliqua dolor cupidatat culpa quis. Aliquip incididunt aute pariatur ullamco.\r\nTempor consequat anim consequat labore enim id ut magna Lorem consequat aute. Anim reprehenderit fugiat ad eu mollit excepteur sint pariatur aliqua adipisicing aute dolore quis ullamco. Ut ea do sint occaecat minim est cupidatat cillum. Laboris labore Lorem ipsum duis cupidatat.\r\n',
				reviews: [
					{
						id: '6362550706b0af54e565d1d3',
						user: {
							id: '63625507da8b2c9f862cf791',
							name: 'Frost Mckee',
						},
						text: 'Nisi occaecat amet qui eiusmod. Id voluptate magna officia ullamco sunt. Aliqua reprehenderit magna do dolor commodo elit enim anim eu ad dolore qui do. Pariatur aliqua cupidatat culpa duis. Voluptate pariatur aute sunt cupidatat est.\r\n',
					},
					{
						id: '636255071138fb38113082ab',
						user: {
							id: '636255073088d7d7dee4aad6',
							name: 'Hyde Whitehead',
						},
						text: 'Voluptate ut id sunt culpa amet non incididunt eu magna. Do duis elit proident amet magna adipisicing non sit ullamco deserunt. Est ex ullamco irure exercitation sint laboris fugiat et commodo magna. Ea enim quis et aliquip nisi. Elit adipisicing culpa officia et qui ipsum pariatur dolor quis adipisicing deserunt. Labore ea eu labore eu adipisicing incididunt eu ipsum labore incididunt est cillum aliqua. Qui in cupidatat veniam pariatur incididunt velit eu magna velit consequat occaecat.\r\n',
					},
					{
						id: '63625507ed68e942cb9c20a7',
						user: {
							id: '636255075501e0360b52d6a5',
							name: 'James Hood',
						},
						text: 'Adipisicing ad ea ut labore ut ullamco officia occaecat velit et. Lorem minim cillum eiusmod ex do et Lorem pariatur. Non commodo sit anim excepteur nisi anim tempor do cillum ut sint duis. Id exercitation laborum proident fugiat nostrud. Aliquip nisi veniam irure dolore quis non eiusmod commodo.\r\n',
					},
					{
						id: '63625507ccbff591faf56cd8',
						user: {
							id: '63625507a5f425ff82bdd144',
							name: 'Anita Kane',
						},
						text: 'Consequat dolor adipisicing commodo in ut aute tempor. Irure eiusmod id eu est excepteur cillum excepteur fugiat magna. Ipsum ea aute consequat voluptate fugiat dolor eu anim minim proident. Fugiat nisi dolor exercitation amet culpa cillum ad. Ad laborum reprehenderit in sit laborum labore eiusmod occaecat in magna. Minim aliquip id dolor aliqua pariatur non tempor ad laborum officia excepteur reprehenderit.\r\n',
					},
					{
						id: '63625507f4558131a04f69ec',
						user: {
							id: '6362550700ac2a335c441243',
							name: 'Melody Hurst',
						},
						text: 'Non labore qui velit veniam cupidatat officia tempor eu ea tempor. Irure ut mollit incididunt elit et cupidatat incididunt cupidatat enim veniam magna eu. Enim eu cillum ad cupidatat. Adipisicing minim tempor irure enim et nisi dolor cupidatat velit Lorem deserunt. Tempor et deserunt nostrud veniam sint reprehenderit laboris.\r\n',
					},
					{
						id: '636255070a96720d8691d5fa',
						user: {
							id: '6362550725bee5ffadb17a95',
							name: 'Loretta Stevens',
						},
						text: 'Commodo fugiat ullamco non reprehenderit aliqua nisi. Velit Lorem ut in ut. Tempor sunt consectetur consequat esse veniam ut laborum fugiat. Proident commodo do sint minim reprehenderit mollit proident. Quis eu sint reprehenderit fugiat amet incididunt. Anim esse in laboris incididunt labore proident excepteur aliqua laboris.\r\n',
					},
					{
						id: '63625507ffad0000f75874ba',
						user: {
							id: '6362550796dc862826828251',
							name: 'Lilly Mcdonald',
						},
						text: 'Dolor ut elit ea consequat ea deserunt eu aliquip eu ex. Veniam enim eiusmod in ex amet labore incididunt sunt eu. Nulla labore minim commodo ad labore fugiat sunt irure consequat. Consectetur est minim amet officia. Amet pariatur tempor cillum officia anim aliquip Lorem.\r\n',
					},
				],
			},
			{
				id: '63625507fe1d48e43c9eb72e',
				name: 'id',
				author: 'Nichols Conner',
				genre: 'pariatur',
				price: 657,
				annotation:
					'Pariatur duis laboris dolor incididunt. Laborum mollit do qui occaecat cupidatat ea Lorem. Nostrud reprehenderit elit adipisicing incididunt ea incididunt ut laborum ut. Ullamco nulla elit exercitation commodo nulla qui est. Aliquip pariatur pariatur minim voluptate excepteur non minim aute quis esse. Nulla eiusmod incididunt ad in veniam non cillum.\r\nVelit tempor amet proident occaecat veniam consectetur voluptate adipisicing veniam do ipsum ut ea. Qui ad amet ad deserunt adipisicing tempor. Nulla ullamco tempor nostrud sint deserunt laborum esse voluptate duis ea sit adipisicing labore. Culpa enim officia voluptate duis sunt in et velit eiusmod aute amet aliquip anim dolore. Proident commodo fugiat laborum consequat occaecat ipsum cillum aliqua in et voluptate dolore cillum.\r\n',
				reviews: [
					{
						id: '63625507f2957603731d136e',
						user: {
							id: '63625507487beee631cc57f8',
							name: 'Pansy Wells',
						},
						text: 'Sunt enim irure eu mollit dolore. Laboris Lorem nostrud tempor reprehenderit magna aliqua labore elit velit veniam esse aute incididunt aliquip. Esse anim anim minim Lorem enim nulla Lorem commodo. Incididunt velit consectetur mollit mollit Lorem amet occaecat adipisicing. Aliqua velit sunt dolore eiusmod ullamco proident nulla nulla proident exercitation deserunt sunt consectetur. Laboris commodo ut ipsum non ipsum sint eu quis ut adipisicing Lorem.\r\n',
					},
					{
						id: '636255072f4cd6b17b4174f1',
						user: {
							id: '63625507dbbfcdf977ed36bf',
							name: 'Gentry Snow',
						},
						text: 'Cillum duis magna cillum qui. Eu reprehenderit duis ex velit cupidatat nulla labore esse. Lorem incididunt commodo officia nostrud Lorem do exercitation incididunt reprehenderit Lorem. Duis sunt sint velit est consectetur cillum ex culpa deserunt. Ex ullamco mollit ipsum sint et mollit. Laboris deserunt magna elit cillum est voluptate amet ipsum. Est exercitation eiusmod deserunt proident labore magna amet aute minim ad cupidatat.\r\n',
					},
					{
						id: '636255070ee8274a90ef0c0f',
						user: {
							id: '636255073078dc9c232403f4',
							name: 'Judy Ryan',
						},
						text: 'Do voluptate dolore ad reprehenderit eiusmod amet culpa nulla nulla eiusmod ullamco eiusmod. Ad excepteur ad duis aliqua elit. Aute amet laboris eiusmod labore qui occaecat est. Velit est mollit occaecat fugiat incididunt consequat culpa anim. Voluptate consectetur minim aliquip nulla eiusmod duis ex cupidatat officia ullamco in. Quis aliquip proident et quis eiusmod excepteur irure nisi sint. Fugiat duis amet duis mollit consequat elit.\r\n',
					},
					{
						id: '6362550723031e85ac6fab2e',
						user: {
							id: '6362550764a695c0873456ed',
							name: 'Harding Park',
						},
						text: 'Cupidatat eiusmod exercitation consectetur consectetur ex consequat. Ad deserunt mollit aliqua ad cupidatat culpa qui anim aliquip tempor ad Lorem. Mollit velit cillum in consectetur ut veniam ullamco dolor ullamco. Consectetur consequat sit irure veniam ad sint pariatur nulla dolore. Sint aliquip aliqua laborum irure elit amet nostrud. Velit voluptate veniam deserunt et ut ut eu sint cupidatat elit cupidatat. Deserunt labore aliquip consectetur occaecat voluptate ea ex ex veniam.\r\n',
					},
				],
			},
		],
	},
];
