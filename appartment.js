const planDetails = {
  apartment: {
    img: 'https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/a87fa0de85333307e4878a5289f05e67-full.jpg',
    floor: '03',
    rooms: '04',
    area: '500',
    parking: '280',
    space: '1500 sqft',
    History:'apartment" refers to a self-contained residential unit within a larger building or complex'
  },
  penthouse: {
    img: 'https://cdn.homedsgn.com/wp-content/uploads/2012/04/PPDG-Penthouse-21-800x640.jpg',
    floor: '4',
    rooms: '05',
    area: '700',
    parking: '350',
    space: '1800 sqft',
    History:'a penthouse is a luxury apartment typically located on the top floor of a building.'
  },
  studio: {
    img: 'https://storage1.indonesia-real.estate/static/p/oyofg828aju/tdx7wexxezb0a90vlkrt/sunnyocean-1bd-35sqm_890x440.jpg',
    floor: '02',
    rooms: '01',
    area: '250',
    parking: '100',
    space: '600 sqft',
    History:'"studio" refers to a type of apartment or living space that typically combines the living room.'
    
  },
  duplex: {
    img: 'https://www.shutterstock.com/image-vector/linear-sketch-interior-room-plan-600nw-1546275464.jpg',
    floor: '06',
    rooms: '06',
    area: '650',
    parking: '300',
    space: '1700 sqft',
    History:'A duplex is a building containing two separate living units, typically one above the other.'
  },
  simplex: {
    img: 'https://reineris.com/wp-content/uploads/2022/12/plan_img.png',
    floor: '04',
    rooms: '03',
    area: '450',
    parking: '200',
    space: '1200 sqft',
    History:'a duplex refers to a building that contains two separate living units',
  },
  doublebed: {
    img: 'https://www.nobroker.in/blog/wp-content/uploads/2025/01/modern-2-bhk-ground-floor-plan-1200x673.webp',
    floor: '02',
    rooms: '02',
    area: '350',
    parking: '180',
    space: '1000 sqft',
    History:'Double beds are the same as full beds '
  }
};



function showPlan(type) {
  const data = planDetails[type];
  document.getElementById('plan-image').src = data.img;
  document.getElementById('plan-info').innerHTML = `
    <p><strong>Floor:</strong> ${data.floor}</p>
    <p><strong>Rooms:</strong> ${data.rooms}</p>
    <p><strong>Area m²:</strong> ${data.area}</p>
    <p><strong>Parking:</strong> ${data.parking}</p>
    <p><strong>Space:</strong> ${data.space}</p>
     <p><strong>History:</strong> ${data.History}</p>
  `;
}


// navarbar

  function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  }
