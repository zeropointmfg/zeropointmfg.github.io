const menu_btn = document.getElementById('menu-btn');
const prototyping_btn = document.getElementById('prototyping-btn');
const short_runs_btn = document.getElementById('short-runs-btn');
const lifecycle_btn = document.getElementById('lifecycle-btn');
const high_volume_btn = document.getElementById('high-volume-btn');
const nav = document.getElementById('menu');
menu_btn.addEventListener('click', () => {
	menu_btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
prototyping_btn.addEventListener('click', () => {
	menu_btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
short_runs_btn.addEventListener('click', () => {
	menu_btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
lifecycle_btn.addEventListener('click', () => {
	menu_btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
high_volume_btn.addEventListener('click', () => {
	menu_btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
const hiddenTopRow = document.getElementById('hiddenTopRow');
const hiddenBottomRow = document.getElementById('hiddenBottomRow');
const contentText = document.getElementById('contentText');
const readMoreLink = document.getElementById('readMoreLink');
const cnc_mill_btn = document.getElementById('cnc_mill_btn');
const cnc_turn_btn = document.getElementById('cnc_turn_btn');
const laser_etch_btn = document.getElementById('laser_etch_btn');
const laser_cut_btn = document.getElementById('laser_cut_btn');
const waterjet_btn = document.getElementById('waterjet_btn');
const weld_btn = document.getElementById('weld_btn');
const sheet_bend_btn = document.getElementById('sheet_bend_btn');
const cad_btn = document.getElementById('cad_btn');
const anodizing_btn = document.getElementById('anodizing_btn');
const powder_coat_btn = document.getElementById('powder_coat_btn');
let isHiddencnc_mill_btn = true;
let isHiddencnc_turn_btn = true;
let isHiddenlaser_etch_btn = true;
let isHiddenlaser_cut_btn = true;
let isHiddenwaterjet_btn = true;
let isHiddenweld_btn = true;
let isHiddensheet_bend_btn = true;
let isHiddencad_btn = true;
let isHiddenanodizing_btn = true;
let isHiddenpowder_coat_btn = true;
document.getElementById('cnc_mill_btn').addEventListener('click', function () {
	contentText1.textContent =
		'CNC milling stands as a pinnacle in advanced manufacturing, utilizing computer-guided machinery to meticulously shape intricate designs from materials like metals and plastics. This technology excels in crafting three-dimensional components with unparalleled precision, making it indispensable in industries such as aerospace and automotive.';
	readMoreLink1.href = 'services/milling.html';
	toggleVisibility('cnc_mill_btn');
});
document.getElementById('cnc_turn_btn').addEventListener('click', function () {
	contentText1.textContent =
		'CNC turning is a cornerstone in advanced manufacturing, employing automated lathes to shape materials into cylindrical components. It excels in producing symmetrical parts like shafts, bolts, and fittings. This technology is crucial for precision engineering, particularly in industries where cylindrical components are prevalent.';
	readMoreLink1.href = 'services/turning.html';
	toggleVisibility('cnc_turn_btn');
});
document
	.getElementById('laser_etch_btn')
	.addEventListener('click', function () {
		contentText1.textContent =
			'Laser etching is an advanced technology in manufacturing, using laser beams controlled by a computer to precisely engrave designs on various materials. This non-contact process is ideal for creating intricate patterns, logos, or serial numbers on surfaces like metal, wood, or plastic. Laser etching ensures high precision and detail, making it a versatile solution for industries ranging from electronics to promotional products.';
		readMoreLink1.href = 'services/laser-etching.html';
		toggleVisibility('laser_etch_btn');
	});
document.getElementById('laser_cut_btn').addEventListener('click', function () {
	contentText1.textContent =
		'Laser cutting, at the forefront of manufacturing technology, employs computer-controlled lasers to precisely cut intricate patterns from diverse materials such as metal, wood, or acrylic. This non-contact method ensures unparalleled precision, allowing for the creation of detailed components, signage, or artistic designs. Laser cutting finds widespread application across industries, offering efficiency and versatility in fabricating custom shapes and structures with impeccable accuracy.';
	readMoreLink1.href = 'services/laser-cutting.html';
	toggleVisibility('laser_cut_btn');
});
document.getElementById('waterjet_btn').addEventListener('click', function () {
	contentText1.textContent =
		'Waterjet cutting, a pinnacle in precision machining, utilizes a high-pressure stream of water mixed with abrasives to precisely cut materials. This technology excels in creating intricate designs and detailed patterns, proving versatile in aerospace and fabrication. Known for accuracy and flexibility, waterjet cutting accommodates metals, ceramics, and composites, minimizing heat impact and preserving material integrity. It offers a clean, efficient method for shaping diverse materials with precision.';
	readMoreLink1.href = 'services/waterjet-cutting.html';
	toggleVisibility('waterjet_btn');
});
document.getElementById('weld_btn').addEventListener('click', function () {
	contentText2.textContent =
		'Welding, a cornerstone in metal fabrication, unites metal pieces through heat and pressure, creating a sturdy structure. This time-honored practice, enhanced by modern technology, provides precision and strength in forging resilient connections. Whether in construction, automotive, or artistry, welding is essential for seamless metal joins. Skilled welders employ methods like arc welding, MIG, or TIG, tailored to materials and project needs. Beyond ensuring structural integrity, welding showcases intricate craftsmanship across diverse industries.';
	readMoreLink2.href = 'services/welding.html';
	toggleVisibility('weld_btn');
});
document
	.getElementById('sheet_bend_btn')
	.addEventListener('click', function () {
		contentText2.textContent =
			'Sheet bending, integral to metal fabrication, transforms flat sheets into intricate 3D structures with precision. Using equipment like press brakes, controlled deformation produces desired shapes. Crucial in construction, automotive, and electronics, it enables complex geometries for structural integrity and aesthetics. Skilled artisans leverage sheet bending for crafting durable, functional metal components meeting diverse design requirements.';
		readMoreLink2.href = 'services/sheet-bending.html';
		toggleVisibility('sheet_bend_btn');
	});
document.getElementById('cad_btn').addEventListener('click', function () {
	contentText2.textContent =
		'CAD (Computer-Aided Design) modeling is the bedrock of modern engineering, transforming how products and structures take shape. Through specialized software, designers and engineers craft detailed digital representations, fostering precise visualization, analysis, and modification pre-production. This process, pivotal in manufacturing, architecture, and product development, enhances innovation and accuracy. CAD modeling empowers creativity by iterating and refining designs in a virtual environment, ensuring optimal, functional, and aesthetically pleasing outcomes in the physical realm.';
	readMoreLink2.href = 'services/cad.html';
	toggleVisibility('cad_btn');
});
document.getElementById('anodizing_btn').addEventListener('click', function () {
	contentText2.textContent =
		'Anodizing, a transformative metal surface treatment, elevates the durability, corrosion resistance, and visual allure of metals, especially aluminum. This electrochemical process forms a protective oxide layer, creating a barrier against environmental factors. Renowned for its longevity, anodizing adds vibrant colors to metals, making it a go-to in architecture, automotive, and consumer products. The controlled oxidation yields a robust finish, enduring wear and tear, and upholding the integrity of metal components across diverse industries.';
	readMoreLink2.href = 'services/anodizing.html';
	toggleVisibility('anodizing_btn');
});
document
	.getElementById('powder_coat_btn')
	.addEventListener('click', function () {
		contentText2.textContent =
			'Powder coating, an innovative finishing method, transforms metal surfaces by applying and heating a dry powder, creating a durable and uniform coating. Renowned for exceptional durability and corrosion resistance, it is a preferred choice for automotive parts, furniture, and appliances. Offering a vast color palette and versatile textures, powder coating elevates both aesthetics and longevity, surpassing traditional liquid coatings. Not only does it enhance product appeal, but its eco-friendly nature minimizes environmental impact, contributing to sustainability.';
		readMoreLink2.href = 'services/powder-coating.html';
		toggleVisibility('powder_coat_btn');
	});
function toggleVisibility(buttonId) {
	if (window.innerWidth >= 768) {
		if (buttonId === 'cnc_mill_btn') {
			isHiddencnc_mill_btn = !isHiddencnc_mill_btn;
			hiddenTopRow.style.display = isHiddencnc_mill_btn ? 'none' : 'flex';
			hiddenBottomRow.style.display = 'none';
			if (isHiddencnc_mill_btn) {
				cnc_mill_btn.classList.remove('bg-active');
			} else {
				cnc_mill_btn.classList.add('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'cnc_turn_btn') {
			isHiddencnc_turn_btn = !isHiddencnc_turn_btn;
			hiddenTopRow.style.display = isHiddencnc_turn_btn ? 'none' : 'flex';
			hiddenBottomRow.style.display = 'none';
			if (isHiddencnc_turn_btn) {
				cnc_turn_btn.classList.remove('bg-active');
			} else {
				cnc_turn_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_mill_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'laser_etch_btn') {
			isHiddenlaser_etch_btn = !isHiddenlaser_etch_btn;
			hiddenTopRow.style.display = isHiddenlaser_etch_btn ? 'none' : 'flex';
			hiddenBottomRow.style.display = 'none';
			if (isHiddenlaser_etch_btn) {
				laser_etch_btn.classList.remove('bg-active');
			} else {
				laser_etch_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_mill_btn = true;
			isHiddencnc_turn_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'laser_cut_btn') {
			isHiddenlaser_cut_btn = !isHiddenlaser_cut_btn;
			hiddenTopRow.style.display = isHiddenlaser_cut_btn ? 'none' : 'flex';
			hiddenBottomRow.style.display = 'none';
			if (isHiddenlaser_cut_btn) {
				laser_cut_btn.classList.remove('bg-active');
			} else {
				laser_cut_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'waterjet_btn') {
			isHiddenwaterjet_btn = !isHiddenwaterjet_btn;
			hiddenTopRow.style.display = isHiddenwaterjet_btn ? 'none' : 'flex';
			hiddenBottomRow.style.display = 'none';
			if (isHiddenwaterjet_btn) {
				waterjet_btn.classList.remove('bg-active');
			} else {
				waterjet_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'weld_btn') {
			isHiddenweld_btn = !isHiddenweld_btn;
			hiddenBottomRow.style.display = isHiddenweld_btn ? 'none' : 'flex';
			hiddenTopRow.style.display = 'none';
			if (isHiddenweld_btn) {
				weld_btn.classList.remove('bg-active');
			} else {
				weld_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'sheet_bend_btn') {
			isHiddensheet_bend_btn = !isHiddensheet_bend_btn;
			hiddenBottomRow.style.display = isHiddensheet_bend_btn ? 'none' : 'flex';
			hiddenTopRow.style.display = 'none';
			if (isHiddensheet_bend_btn) {
				sheet_bend_btn.classList.remove('bg-active');
			} else {
				sheet_bend_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'cad_btn') {
			isHiddencad_btn = !isHiddencad_btn;
			hiddenBottomRow.style.display = isHiddencad_btn ? 'none' : 'flex';
			hiddenTopRow.style.display = 'none';
			if (isHiddencad_btn) {
				cad_btn.classList.remove('bg-active');
			} else {
				cad_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddenanodizing_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'anodizing_btn') {
			isHiddenanodizing_btn = !isHiddenanodizing_btn;
			hiddenBottomRow.style.display = isHiddenanodizing_btn ? 'none' : 'flex';
			hiddenTopRow.style.display = 'none';
			if (isHiddenanodizing_btn) {
				anodizing_btn.classList.remove('bg-active');
			} else {
				anodizing_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
				powder_coat_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddencnc_mill_btn = true;
			isHiddenpowder_coat_btn = true;
		} else if (buttonId === 'powder_coat_btn') {
			isHiddenpowder_coat_btn = !isHiddenpowder_coat_btn;
			hiddenBottomRow.style.display = isHiddenpowder_coat_btn ? 'none' : 'flex';
			hiddenTopRow.style.display = 'none';
			if (isHiddenpowder_coat_btn) {
				powder_coat_btn.classList.remove('bg-active');
			} else {
				powder_coat_btn.classList.add('bg-active');
				cnc_mill_btn.classList.remove('bg-active');
				cnc_turn_btn.classList.remove('bg-active');
				laser_cut_btn.classList.remove('bg-active');
				waterjet_btn.classList.remove('bg-active');
				weld_btn.classList.remove('bg-active');
				sheet_bend_btn.classList.remove('bg-active');
				cad_btn.classList.remove('bg-active');
				anodizing_btn.classList.remove('bg-active');
				laser_etch_btn.classList.remove('bg-active');
			}
			isHiddencnc_turn_btn = true;
			isHiddenlaser_etch_btn = true;
			isHiddenlaser_cut_btn = true;
			isHiddenwaterjet_btn = true;
			isHiddenweld_btn = true;
			isHiddensheet_bend_btn = true;
			isHiddencad_btn = true;
			isHiddenanodizing_btn = true;
			isHiddencnc_mill_btn = true;
		}
	}
}
