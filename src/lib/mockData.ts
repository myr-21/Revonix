export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
}

export interface Product {
  id: string;
  name: string;
  category: 'batteries' | 'charging' | 'solar' | 'bms';
  thumbnail: string;
  gallery: string[];
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  specifications: Record<string, string>;
  techStack: string[];
  brochureUrl?: string;
  videoUrl?: string;
  status: 'Available' | 'Pre-order' | 'Coming Soon';
  isFeatured: boolean;
  relatedProductIds: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  timeline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  gallery: string[];
  clientFeedback?: {
    comment: string;
    author: string;
    role: string;
  };
}

export interface Career {
  id: string;
  title: string;
  department: 'Engineering' | 'Sales' | 'Operations' | 'R&D';
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  experience: string;
  salaryRange?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  thumbnail: string;
  isFeatured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Engineering' | 'R&D' | 'Operations';
  bio: string;
  avatar: string;
  linkedin: string;
  experience: string;
  skills: string[];
}

// ==========================================
// SEED DATA REPRESENTATION
// ==========================================

export const SERVICES: Service[] = [
  {
    id: 'custom-battery-packs',
    name: 'Custom Lithium Battery Packs',
    shortDesc: 'High-performance Li-Ion and LiFePO4 packs designed to meet exact voltage, capacity, and dimensions.',
    detailedDesc: 'Our custom battery pack engineering service provides high-reliability energy solutions using premium chemistry cells. We design, prototype, and manufacture packs for electric vehicles (EVs), Automated Guided Vehicles (AGVs), robotics, telecommunications, and industrial backups. Each pack is optimized for thermodynamic efficiency, vibration resistance, and structural integrity.',
    icon: 'BatteryCharging',
    benefits: [
      'Engineered to fit precise mechanical chassis limits.',
      'Optimized weight distribution for vehicular applications.',
      'Flexible chemical compositions (NMC, LFP) based on lifecycle goals.',
      'High charge-discharge rate capacity (C-Rating) configuration.',
      'Rigorous thermal-runaway prevention design.'
    ],
    process: [
      { step: '01', title: 'Consultation & Requirements', description: 'Analyze your operational voltage range, continuous/peak current levels, dimensional bounds, and operating environment.' },
      { step: '02', title: '3D Modeling & Simulation', description: 'Create internal cell placement diagrams, thermal dissipation channels, and custom enclosure designs.' },
      { step: '03', title: 'BMS Calibration & Integration', description: 'Select and program our advanced BMS system with precise over-current and thermal limits tailored for the configuration.' },
      { step: '04', title: 'Prototype & Stress Testing', description: 'Manufacture pilot packs and subject them to extreme vibratory, thermal cycle, and load discharge analysis.' },
      { step: '05', title: 'Mass Production & Delivery', description: 'Execute strict quality control assembly line builds, pack certification checkouts, and clean energy dispatch.' }
    ],
    technologies: ['LiFePO4 Chemistry', 'Lithium Nickel Manganese Cobalt (NMC)', 'Thermal Simulation', 'CNC Enclosure Mill', 'Pouch/Prismatic/Cylindrical Formats'],
    industries: ['Electric Mobility', 'Material Handling (AGVs/Forklifts)', 'Robotics & Automation', 'Telecom Telecom UPS'],
    faqs: [
      { question: 'What is the standard lead time for custom battery packs?', answer: 'Initial prototyping and mechanical simulation take 3-4 weeks. Mass production and validation typically take 4-6 weeks depending on scale and cell availability.' },
      { question: 'How do you ensure battery pack safety?', answer: 'We build in multi-layer protection: cell-level fuses, smart BMS tracking, flame-retardant structural materials, and thermal barrier sheets between layers.' }
    ]
  },
  {
    id: 'smart-charging',
    name: 'Smart Charging Infrastructure',
    shortDesc: 'Intelligent electric vehicle and industrial charging stations with real-time analytics dashboards.',
    detailedDesc: 'We develop intelligent charging interfaces built for the demands of next-gen smart grids. Our charging units deliver fast, stable power conversion while supplying operator dashboards with telemetry. Perfect for corporate fleets, logistical hubs, and commercial complexes seeking low-latency load management and energy efficiency.',
    icon: 'Zap',
    benefits: [
      'Dynamic power balancing to prevent grid overloads.',
      'OCPP compliance for flexible software integration.',
      'Rugged, weather-proof enclosures (IP65 rated) built for durability.',
      'Scheduled charging to leverage off-peak electricity rates.'
    ],
    process: [
      { step: '01', title: 'Site Inspection', description: 'Evaluate grid capability, power distribution cabinets, and physical parking layouts.' },
      { step: '02', title: 'Infrastructure Design', description: 'Formulate single-line electrical diagrams and locate ideal cabling routes.' },
      { step: '03', title: 'Hardware Setup', description: 'Deploy charging pillars, connect network telematics, and calibrate smart meters.' },
      { step: '04', title: 'Software Handover', description: 'Provision fleet dashboard accesses and calibrate payment/access gateways.' }
    ],
    technologies: ['OCPP 1.6J/2.0.1', 'Dynamic Load Balancing (DLB)', 'Ethernet & 4G Telemetry', 'RFID/App Access'],
    industries: ['Logistics & Fleets', 'Corporate Parks', 'Retail Centers', 'Municipal Parking'],
    faqs: [
      { question: 'Do the chargers support dual guns?', answer: 'Yes, our smart chargers are available in single, dual, and multi-dispenser layouts with active load sharing.' },
      { question: 'Can these chargers integrate with solar arrays?', answer: 'Absolutely. Our chargers support green-charging mode, syncing power draws with surplus solar production.' }
    ]
  },
  {
    id: 'solar-storage',
    name: 'Solar Energy Storage',
    shortDesc: 'Seamless hybrid and off-grid solar systems paired with modern lithium battery banks.',
    detailedDesc: 'Transition away from fossil-fueled generators. Our solar energy storage integration couples high-efficiency solar cells with LiFePO4 battery modules. These systems manage power during peak rates, store energy for outages, and enable microgrid independence for factories and estates.',
    icon: 'Sun',
    benefits: [
      'Zero grid feedback setup options (100% self-consumption).',
      'Millisecond-level transfer times for uninterrupted power backup.',
      'Modular scalability to expand battery capacity over time.',
      'Substantial reduction in monthly electrical utility billing.'
    ],
    process: [
      { step: '01', title: 'Solar Assessment', description: 'Examine shadow projections, roof structures, or ground spaces to calculate solar irradiance capacity.' },
      { step: '02', title: 'System Sizing', description: 'Cross-reference grid bills to match perfect inverter capacities and battery storage hours.' },
      { step: '03', title: 'Installation', description: 'Mount panels, secure inverters, place clean-energy battery racks, and complete electrical connections.' },
      { step: '04', title: 'Commissioning', description: 'Run grid-islanding tests and sign off on utility approval processes.' }
    ],
    technologies: ['Hybrid Solar Inverters', 'LiFePO4 Storage Banks', 'Net Metering', 'MPPT Controllers'],
    industries: ['Agricultural Estates', 'Heavy Manufacturing', 'Residential Estates', 'Remote Off-grid Facilities'],
    faqs: [
      { question: 'What is the typical ROI on solar storage systems?', answer: 'Depending on local electricity rates and solar availability, systems achieve complete payback in 4 to 6 years, with a lifecycle exceeding 15 years.' },
      { question: 'What is the lifespans of the battery bank?', answer: 'Our LiFePO4 cells are rated for >6000 cycles at 80% Depth of Discharge, equivalent to approximately 15-20 years of daily operation.' }
    ]
  },
  {
    id: 'advanced-bms',
    name: 'Advanced BMS Systems',
    shortDesc: 'Sophisticated battery management units providing microsecond-level circuit protection and telemetry.',
    detailedDesc: 'The brain of every lithium pack. Our state-of-the-art Battery Management Systems monitor individual cell voltages, temperatures, and current flows in real-time. By utilizing active balancing and smart algorithms, we maximize runtime, extend pack longevity, and offer communication protocols for system controllers.',
    icon: 'Cpu',
    benefits: [
      'Active cell-to-cell balancing to prevent capacity mismatches.',
      'Microsecond responses to overcurrent, short circuit, and voltage faults.',
      'Direct telemetry via CAN bus, RS485, and Bluetooth interfaces.',
      'Accurate State of Charge (SoC) and State of Health (SoH) metrics.'
    ],
    process: [
      { step: '01', title: 'Chemistry Profile Mapping', description: 'Analyze the cell internal resistance curve to adjust lookup table thresholds.' },
      { step: '02', title: 'Hardware Matching', description: 'Choose between low-power SMD designs or heavy-duty busbar-interfaced BMS cards.' },
      { step: '03', title: 'Firmware Configuration', description: 'Customize warning flags, communication packets, and safety cutout points.' },
      { step: '04', title: 'Calibration', description: 'Verify accuracy of current sensors and balance circuits under loaded run states.' }
    ],
    technologies: ['CAN Bus 2.0B / CANopen', 'Modbus RTU / RS485', 'Active Balancing Circuitry', 'Dual-Core Protections MCU'],
    industries: ['Battery Manufacturers', 'EV Powertrain Integrators', 'Research Institutes', 'Unmanned Aerial Vehicles (UAVs)'],
    faqs: [
      { question: 'Does the BMS support Bluetooth monitoring?', answer: 'Yes, our BMS controllers feature low-energy Bluetooth with a companion smartphone application for local diagnostics.' },
      { question: 'Can the BMS handle active balancing?', answer: 'Yes, we offer both passive balancing for smaller systems and active balancing (up to 2A) for large utility-scale configurations.' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'rx-power-nmc',
    name: 'Rx-Power Lithium-Ion Pack',
    category: 'batteries',
    thumbnail: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Ultra-high energy density NMC lithium packs designed for performance-focused electric mobility and robotics.',
    detailedDesc: 'The Rx-Power Lithium-Ion Pack is our premium NMC (Nickel Manganese Cobalt) solution engineered for systems requiring maximum energy density and weight savings. Built with grade-A cylindrical cells and supported by our robust aluminum chassis, this battery pack is optimal for electric two-wheelers, delivery AGVs, and custom robotic platforms. Comes integrated with custom communication interfaces.',
    features: [
      'High volumetric energy density exceeding 220 Wh/kg.',
      'Flexible configurations ranging from 48V to 96V.',
      'Direct cell temperature tracking sensors embedded in layers.',
      'IP67 shockproof and dustproof metal alloy enclosures.',
      'Smart diagnostics connection via Bluetooth.'
    ],
    specifications: {
      'Chemistry': 'Lithium NMC',
      'Nominal Voltages': '48V / 60V / 72V / 96V options',
      'Capacity Range': '40Ah to 150Ah configurations',
      'Cycle Lifespan': '2,000+ cycles at 80% DOD',
      'Protection Standard': 'IP67 dust/water rating',
      'Operating Temperature': '-20°C to 60°C'
    },
    techStack: ['NMC Cylindrical Cells', 'Integrated CAN-BMS', 'Anodized Aluminum Shell', 'Copper Busbar Weldings'],
    status: 'Available',
    isFeatured: true,
    relatedProductIds: ['rx-bms-pro', 'rx-charger-smart']
  },
  {
    id: 'rvx72e36a',
    name: 'REVONIX RVX72E36A Lithium-Ion NMC Battery Pack',
    category: 'batteries',
    thumbnail: '/media__1784313627005.png',
    gallery: [
      '/media__1784313627005.png'
    ],
    shortDesc: '72V 36Ah battery pack engineered for electric scooters demanding high range, active balancing, and real-world durability.',
    detailedDesc: 'POWER THAT GOES THE DISTANCE. Introducing the REVONIX RVX72E36A 72V 36Ah Lithium-Ion NMC Battery Pack. Engineered for electric scooters that demand more than "claimed range" nonsense. Because apparently basic honesty is now a premium feature in the EV industry. Built for slopes, load, and Indian roads with stable high-performance output.',
    features: [
      'Up to 115+ KM Range on a single charge*',
      'Active Balancing Technology for even cells',
      'Smart BMS Protection against over-current and heat',
      'Built for Slopes, Load & Indian Roads',
      'Stable High-Performance Output'
    ],
    specifications: {
      'Chemistry': 'Lithium-Ion NMC',
      'Nominal Voltage': '72V',
      'Nominal Capacity': '36Ah',
      'Range Output': 'Up to 115+ KM*',
      'Balancing Support': 'Active Balancing Technology',
      'Protection Standard': 'Built-in Smart BMS Protection'
    },
    techStack: ['NMC Chemistry', 'Active Balancing BMS', 'EV Grade Cell Groups', 'Alloy Casing'],
    status: 'Available',
    isFeatured: true,
    relatedProductIds: ['rx-bms-pro', 'rx-charger-smart']
  },
  {
    id: 'revonix-solar-ess',
    name: 'REVONIX Solar Energy Storage Solutions',
    category: 'solar',
    thumbnail: '/media__1784313650476.jpg',
    gallery: [
      '/media__1784313650476.jpg'
    ],
    shortDesc: 'Custom-built LFP energy systems from 12V 100Ah to scalable 100kWh+ ESS solutions engineered for performance, safety, and reliability.',
    detailedDesc: 'Powering Homes, Businesses & Industries with Reliable Energy Storage. From compact 12V 100Ah lithium battery systems to scalable ESS solutions exceeding 100kWh, REVONIX TECHNOLOGIES delivers custom-built energy storage solutions engineered for performance, safety, and reliability. High-efficiency LFP technology with smart BMS protection compatible with solar systems.',
    features: [
      'LFP (Lithium Iron Phosphate) Technology',
      'Smart BMS & Long Cycle Life',
      'Solar Compatible Integration',
      'Available Systems: 12V/24V/48V (100Ah to 200Ah)',
      'Scalable ESS Solutions up to 100kWh+',
      'Industrial-Grade Enclosure'
    ],
    specifications: {
      'Chemistry': 'Lithium Iron Phosphate (LFP)',
      'Available systems': '12V 100Ah/150Ah/200Ah, 24V 100Ah/200Ah, 48V 100Ah/150Ah/200Ah',
      'ESS Capacity': 'Up to 100kWh+ Scalable',
      'Applications': 'Residential Solar, Commercial Solar, Industrial Backup, Telecom, Microgrids',
      'Features': 'Smart BMS, Solar Compatible, Custom Configurations'
    },
    techStack: ['LFP Chemistry', 'Smart BMS Controls', 'Solar Integration MPPT', 'Scalable Cabinet design'],
    status: 'Available',
    isFeatured: true,
    relatedProductIds: ['rx-bms-pro', 'rx-solar-storage-hub']
  },
  {
    id: 'rx-charger-smart',
    name: 'Rx-Charger Intelligent Station',
    category: 'charging',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'OCPP-compliant smart charging station for electric vehicle fleets, corporate offices, and depots.',
    detailedDesc: 'A premium smart EV charging solution for fleets and commercial spaces. Featuring OCPP support, this charger connects seamlessly with central cloud systems, providing remote power throttles, dynamic schedules, and authorization logs. Built inside a NEMA-4 powder-coated shell to withstand extreme outdoor conditions.',
    features: [
      'Selectable power configurations: 7.4kW AC up to 22kW AC.',
      'OCPP 1.6J and 2.0.1 compliance for platform management.',
      'Built-in safety diagnostics: RCD Type B, surge, and over-current.',
      'Interactive LCD screen and LED indicators.',
      'NFC/RFID reader for authorized fleet access.'
    ],
    specifications: {
      'Charging Interface': 'IEC 62196 Type 2 gun (Single/Dual)',
      'Output Power': '7.4 kW / 11 kW / 22 kW AC',
      'Input Voltage': '400V AC ± 15% Three-Phase',
      'Enclosure Rating': 'IP55 / NEMA 4 outdoor rating',
      'Connectivity': 'WiFi / Ethernet / 4G LTE',
      'Access Controls': 'RFID, QR Code, mobile App'
    },
    techStack: ['Smart Microcontroller Unit', 'Type B Leakage Protection', 'Powder Coated SGCC Enclosure', 'Solid Copper Connectors'],
    status: 'Available',
    isFeatured: false,
    relatedProductIds: ['rx-power-nmc', 'rx-safe-lifepo4']
  },
  {
    id: 'rx-bms-pro',
    name: 'Rx-BMS Core Management Unit',
    category: 'bms',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Industrial-grade Battery Management System with active cell balancing, precise telemetry, and multi-protocol support.',
    detailedDesc: 'The absolute core of battery safety. The Rx-BMS Core is a dual-processor monitoring board designed to safeguard multi-cell packs. It tracks individual voltages, logs cell resistance indexes, handles thermal thresholds, and communicates telemetry directly to the host vehicle controller or solar inverter. Features dynamic active balancing to preserve battery capacity and longevity.',
    features: [
      'Supports 8S to 24S cell configurations.',
      'Microsecond short-circuit current protection.',
      'Up to 1.5A active cell-to-cell balancing.',
      'Dual temperature probe points.',
      'Bluetooth pairing for mobile app dashboard diagnostics.'
    ],
    specifications: {
      'Cell Configuration': '8S to 24S series cells support',
      'Balancing Method': 'Active balancing (up to 1.5A)',
      'Current Continuous': '100A / 150A / 200A versions',
      'Communication protocols': 'CAN Bus 2.0B, RS485, UART, Modbus',
      'Dimensions': '180mm x 110mm x 25mm',
      'Monitoring Accuracy': 'Voltage: ±2mV, Temp: ±1°C'
    },
    techStack: ['STMicroelectronics MCU', 'Texas Instruments AFE ICs', 'Solid Copper Bus-interfaces', 'Multi-layer Gold-plated PCB'],
    status: 'Available',
    isFeatured: false,
    relatedProductIds: ['rx-power-nmc', 'rx-safe-lifepo4']
  },
  {
    id: 'rx-solar-storage-hub',
    name: 'Rx-Solar Hybrid Storage System',
    category: 'solar',
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'All-in-one solar inverter and energy storage cabinet for premium homes and industrial sites.',
    detailedDesc: 'The ultimate off-grid and peak-shaving solution. The Rx-Solar Hub integrates a high-frequency hybrid inverter, a solar charge controller, and a 15kWh LiFePO4 battery rack into a single vertical cabinet. Eliminates complex wiring, shortens installation times, and integrates with smartphone applications for power monitoring.',
    features: [
      'Pre-wired hybrid solar inverter (5kW/10kW AC output).',
      'Includes 15kWh scalable LFP battery storage.',
      'Seamless transition to backup power (less than 10ms transfer).',
      'Sleek appliance-like design fits indoors or outdoors.',
      'Over-the-air firmware updates.'
    ],
    specifications: {
      'AC Output Power': '10kW Continuous / 20kW Surge peak',
      'Battery Capacity': '15.36 kWh (scalable up to 46 kWh)',
      'MPPT Inlets': 'Dual trackers, 120V to 500V DC input',
      'Transfer Time': '< 10 milliseconds (UPS Grade)',
      'Dimensions': '1600mm x 600mm x 350mm',
      'Weight': '185 kg (modular blocks installation)'
    },
    techStack: ['High-Frequency IGBT Inverter', 'LFP Battery Cell Blocks', 'Cooling Fan System', 'LCD Color Touchscreen'],
    status: 'Coming Soon',
    isFeatured: true,
    relatedProductIds: ['rx-safe-lifepo4', 'rx-charger-smart']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pune-residential-microgrid',
    title: 'Pune Residential Solar Microgrid Integration',
    category: 'Solar Storage',
    client: 'Eco-Living Residency Complex',
    timeline: 'Nov 2024 - Feb 2025',
    summary: 'Redesigned a community backup system, replacing diesel generators with an integrated 120kWh Lithium Iron Phosphate (LiFePO4) solar storage bank.',
    challenge: 'The residential society faced 2-3 hour daily power cuts during peak summers. The existing diesel generators emitted noise, fumes, and cost over ₹25 per unit in fuel and maintenance.',
    solution: 'Revonix installed custom 15s 48V rackmount battery packs integrated with a hybrid solar inverter. We deployed intelligent peak-shaving algorithms that charge the batteries using solar energy and release it during peak demand intervals.',
    results: [
      'Eliminated diesel backup fuel consumption by 92%.',
      'Decreased grid energy costs by 34% through peak-load shifting.',
      'Provided completely silent backup power switching in under 10ms.',
      'Prevented an estimated 45 tons of carbon dioxide emissions annually.'
    ],
    techStack: ['Rx-Safe LiFePO4 Modules', 'Hybrid Inverters', 'Telemetry Web Portal', 'Copper Busbars'],
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fda35?auto=format&fit=crop&w=1200&q=80'
    ],
    clientFeedback: {
      comment: 'The custom LiFePO4 battery pack designed by Revonix has transformed our solar backup runtime. Exceptionally stable and runs cool.',
      author: 'Anoop Nair',
      role: 'Facilities Director, Eco-Living Pune'
    }
  },
  {
    id: 'mumbai-fleet-charging',
    title: 'Mumbai Logistics Smart Charging Network',
    category: 'Smart Charging',
    client: 'Quick-Logistics India Pvt Ltd',
    timeline: 'Aug 2024 - Dec 2024',
    summary: 'Deployed 25 smart AC fast-chargers with dynamic load-balancing controllers to charge a fleet of electric delivery vans.',
    challenge: 'Charging 25 electric vans simultaneously threatened to trigger building circuit breakers. The depot grid capacity could only handle 12 vehicles charging at maximum rates simultaneously.',
    solution: 'We deployed our Rx-Charger units with centralized Dynamic Load Balancing (DLB) software. The charging hub monitors current limits in real-time, distributing power dynamically based on vehicle state of charge and dispatch schedules.',
    results: [
      'Allowed 25 vans to safely charge concurrently without grid capacity upgrades.',
      'Reduced charge cycle setup complexity via fleet RFID validation.',
      'Provided the operations manager with real-time fleet battery SoC metrics.',
      'Maintained 100% charger uptime through outdoor monsoon weather.'
    ],
    techStack: ['Rx-Charger Intelligent Stations', 'OCPP 1.6J Server', 'Dynamic Load Balancing Gateway'],
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
    ],
    clientFeedback: {
      comment: 'Their smart charging solutions are robust and very simple to integrate. Exceptional technical support throughout the design phase.',
      author: 'Rajiv Mehta',
      role: 'Fleet Operations Lead, Quick-Logistics'
    }
  }
];

export const CAREERS: Career[] = [
  {
    id: 'bms-firmware-engineer',
    title: 'Senior BMS Firmware Engineer',
    department: 'Engineering',
    location: 'Hadapsar, Pune (On-site)',
    type: 'Full-time',
    experience: '4+ Years',
    salaryRange: '₹12,00,000 - ₹18,00,000 / year',
    summary: 'Develop robust, low-latency firmware for our next-generation battery management system (BMS) controllers.',
    responsibilities: [
      'Design, write, and validate C/C++ firmware code for STM32 and TI microcontrollers.',
      'Implement CAN bus (CANopen, J1939) and Modbus/RS485 communication interfaces.',
      'Optimize state of charge (SoC) and state of health (SoH) calculation models.',
      'Debug hardware schematics using oscilloscopes, logic analyzers, and load banks.'
    ],
    requirements: [
      'Bachelor’s degree in Electrical/Electronics Engineering or Embedded Systems.',
      'Strong expertise in microcontroller architectures, ADC calibration, and RTOS development.',
      'Familiarity with lithium battery cell chemistry thresholds and safety regulations.',
      'Experience with version control tools like Git.'
    ],
    benefits: [
      'Flexible working schedules.',
      'Comprehensive health insurance plans.',
      'Performance-linked annual bonuses.',
      'Access to a state-of-the-art battery prototyping laboratory.'
    ]
  },
  {
    id: 'sales-manager-cleanenergy',
    title: 'Technical Sales Manager - Clean Energy',
    department: 'Sales',
    location: 'Pune / Mumbai (Hybrid)',
    type: 'Full-time',
    experience: '3+ Years',
    salaryRange: '₹8,00,000 - ₹12,00,000 + incentives',
    summary: 'Engage with corporate complexes, industrial developers, and EV fleet managers to propose custom battery and charging installations.',
    responsibilities: [
      'Identify and convert commercial scale clean-energy project opportunities.',
      'Translate client capacity requirements into technical layout proposals.',
      'Collaborate with engineering design teams to draft commercial estimates.',
      'Lead vendor registration checkouts with industrial developers.'
    ],
    requirements: [
      'B.Tech or MBA with experience working in solar, EV charging, or energy storage fields.',
      'Solid communication skill set in English, Hindi, and Marathi.',
      'Proven track record of technical B2B client acquisitions.',
      'Willingness to travel for on-site engineering assessments.'
    ],
    benefits: [
      'Uncapped sales commission models.',
      'Travel allowances and hybrid work models.',
      'Extensive product training workshops.'
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'lifepo4-vs-nmc-batteries',
    title: 'LiFePO4 vs. NMC: Choosing the Right Lithium Chemistry for Your Project',
    category: 'Battery Technology',
    tags: ['Lithium Batteries', 'LiFePO4', 'NMC', 'Energy Storage'],
    summary: 'An in-depth engineering comparison highlighting lifecycles, thermal behaviors, cost indexes, and volumetric densities.',
    content: `Choosing the correct chemistry is the single most critical engineering decision when developing a custom lithium battery pack. Today, the commercial market is dominated by two primary lithium-ion variations: Lithium Iron Phosphate (LiFePO4 or LFP) and Lithium Nickel Manganese Cobalt Oxide (LiNiMnCoO2 or NMC). Each chemistry possesses starkly different behaviors in terms of cycle life, energy density, cost, and safety.

### 1. Cycle Life and Longevity
LiFePO4 cells are the clear winner when it comes to longevity. While premium NMC cells typically offer between 1,500 to 2,500 charge-discharge cycles before capacity degrades to 80% of original levels, LiFePO4 cells regularly exceed 5,000 to 6,000 cycles under similar conditions. For applications like residential solar systems or stationary industrial backup banks, this translates to 15+ years of daily cycling without needing replacements.

### 2. Volumetric and Gravimetric Energy Density
Where space and weight are critical constraints, NMC is the dominant choice. NMC cells boast an energy density of approximately 180 to 240 Wh/kg, whereas LFP cells hover around 120 to 160 Wh/kg. This is the main reason electric motorcycles, performance cars, and robotics rely on NMC; using LFP would double the weight and dimension footprint of the battery pack for the exact same runtime.

### 3. Thermal Stability and Safety Profile
Safety is paramount in battery design. LiFePO4 is chemically much more stable than NMC. The thermal runaway threshold for LFP occurs at around 270°C, compared to NMC which can experience runaway at approximately 210°C. In the event of an overcharge, internal short, or physical puncture, LFP cells rarely catch fire; they slowly release gas. NMC cells, containing active oxygen structures, require more complex BMS safeguards and flame-retardant enclosures.

### Summary of Differences:
- **LFP:** Ideal for stationary storage, solar arrays, telecom backups, and applications where safety and absolute lifecycles take precedence.
- **NMC:** Ideal for electric vehicles, hand tools, custom UAVs, and mobile robotics where weight savings and compact packaging are required.`,
    author: {
      name: 'Aditya Kulkarni',
      role: 'Head of R&D, Revonix',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    readTime: '5 min read',
    publishedAt: 'May 14, 2026',
    thumbnail: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'ev-charging-dynamic-load-balancing',
    title: 'Why Dynamic Load Balancing is Critical for EV Fleets',
    category: 'Charging Infrastructure',
    tags: ['Smart Charging', 'Grid Integration', 'Fleet Management'],
    summary: 'Learn how smart load sharing algorithms prevent expensive utility grid upgrades while charging commercial vehicles.',
    content: `As businesses transition their logistics operations to electric vehicle fleets, facility directors face a massive barrier: grid capacity limits. Standard commercial parking structures were not designed to deliver hundreds of kilowatts of continuous electricity to electric vehicle batteries. Dynamic Load Balancing (DLB) offers a digital solution to physical power limits.

### The Problem: Peak Capacity Charges and Inevitable Grid Blowouts
If a depot installs ten 22kW fast chargers and connects them to ten fleet vehicles, the total power draw can reach 220kW. If the building’s total transformer spare headroom is only 100kW, starting the charging process simultaneously will trip main circuit breakers or trigger massive peak-demand fee penalties from utility companies.

### The Solution: Smart Load-Sharing
Dynamic Load Balancing acts as an active traffic warden. A smart controller continuously measures the real-time electrical draw of the entire building and subtracts it from the maximum safe current limit. The leftover power budget is dynamically distributed among active vehicles.

For example, if vehicle A is nearly full, its charging rate naturally drops. The DLB system immediately diverts that spare capacity to vehicle B, which has just arrived with a near-empty battery. 

### Why Choose DLB over Grid Upgrades?
Investing in new grid transformers, cables, and substation permissions can cost millions of rupees and take over a year in bureaucratic delays. Deploying smart charging hubs with software-driven DLB allows immediate setup, optimal grid utilization, and reduced carbon footprints.`,
    author: {
      name: 'Siddharth Patil',
      role: 'Lead Systems Engineer, Revonix',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    readTime: '4 min read',
    publishedAt: 'Jun 22, 2026',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'mayur-deshmukh',
    name: 'Mayur Deshmukh',
    role: 'Founder & Managing Director',
    department: 'Leadership',
    bio: 'Pioneering custom energy storage development. Formulating strategies that bridge lithium battery chemistry advances with Indian grid environments.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/revonix-technologies',
    experience: '10+ Years in Smart Energy Design',
    skills: ['Strategic Planning', 'Battery Pack Design', 'B2B Client Alliances']
  },
  {
    id: 'aditya-kulkarni',
    name: 'Aditya Kulkarni',
    role: 'Head of R&D',
    department: 'Engineering',
    bio: 'Lead engineer overseeing cell stress validations, polymer enclosure designs, and thermal isolation testing.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/revonix-technologies',
    experience: '8 Years in Lithium Cell Chemistry',
    skills: ['NMC / LFP Chemistry Profiles', 'Thermal Simulations', 'ANSYS modeling']
  },
  {
    id: 'siddharth-patil',
    name: 'Siddharth Patil',
    role: 'Lead Systems Engineer',
    department: 'Engineering',
    bio: 'Specialist in CAN bus protocols, OCPP integrations, and firmware safety logic implementations for smart microgrids.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/revonix-technologies',
    experience: '6 Years in Embedded Firmware',
    skills: ['BMS Firmware', 'C / C++', 'OCPP & Telematics Protocols']
  }
];
