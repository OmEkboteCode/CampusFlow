const sampleIssues = [
  {
    title: "Wi-Fi not working in CS Lab 204",
    description:
      "The computers in CS Lab 204 are connected to the network but cannot access the internet.",
    category: "Infrastructure",
    location: "CS Block - Lab 204",
    status: "Open",
    createdAt: new Date("2026-08-25T09:15:00"),
    image: {
      filename: "cs-lab-wifi",
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Projector not turning on",
    description:
      "The projector in Seminar Hall 2 does not power on even though the power supply appears to be working.",
    category: "Equipment",
    location: "Seminar Hall 2",
    status: "In Progress",
    createdAt: new Date("2026-08-24T14:30:00"),
    image: {
      filename: "seminar-projector",
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Water cooler leaking",
    description:
      "The water cooler near the first floor staircase is leaking water onto the floor.",
    category: "Maintenance",
    location: "Main Block - First Floor",
    status: "Open",
    createdAt: new Date("2026-08-26T11:20:00"),
  },

  {
    title: "Library AC not working",
    description:
      "The air conditioner in the reading section has stopped cooling properly.",
    category: "Maintenance",
    location: "Central Library - Reading Hall",
    status: "In Progress",
    createdAt: new Date("2026-08-23T16:10:00"),
    image: {
      filename: "library-ac",
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Broken chair in classroom",
    description:
      "One of the chairs in the classroom has a broken backrest and should not be used.",
    category: "Furniture",
    location: "Block A - Room 105",
    status: "Open",
    createdAt: new Date("2026-08-27T10:45:00"),
    image: {
      filename: "broken-classroom-chair",
      url: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Lights flickering in corridor",
    description:
      "Several lights in the second floor corridor are flickering throughout the day.",
    category: "Electrical",
    location: "Block B - Second Floor",
    status: "Open",
    createdAt: new Date("2026-08-28T08:40:00"),
  },

  {
    title: "Hostel bathroom tap leaking",
    description:
      "A tap in the second floor bathroom has been continuously leaking since yesterday.",
    category: "Plumbing",
    location: "Hostel Block B - Second Floor",
    status: "In Progress",
    createdAt: new Date("2026-08-22T19:30:00"),
    image: {
      filename: "hostel-bathroom-tap",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Cafeteria tables need cleaning",
    description:
      "Several tables in the outdoor cafeteria area are dirty and have not been cleaned after lunch.",
    category: "Cleanliness",
    location: "Main Cafeteria",
    status: "Resolved",
    createdAt: new Date("2026-08-21T13:15:00"),
  },

  {
    title: "Parking area light not working",
    description:
      "The light near the north parking entrance is not working after sunset.",
    category: "Electrical",
    location: "North Parking Area",
    status: "Open",
    createdAt: new Date("2026-08-27T18:20:00"),
    image: {
      filename: "parking-light",
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Library computer cannot start",
    description:
      "One of the computers in the digital library does not boot when the power button is pressed.",
    category: "Equipment",
    location: "Digital Library",
    status: "In Progress",
    createdAt: new Date("2026-08-20T12:00:00"),
  },

  {
    title: "Broken window in classroom",
    description:
      "The glass panel of a window has developed a large crack and needs to be replaced.",
    category: "Maintenance",
    location: "Block C - Room 302",
    status: "Open",
    createdAt: new Date("2026-08-29T09:00:00"),
    image: {
      filename: "classroom-window",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Drinking water dispenser empty",
    description:
      "The drinking water dispenser near the auditorium has no water available.",
    category: "Facilities",
    location: "Auditorium Entrance",
    status: "Resolved",
    createdAt: new Date("2026-08-19T10:30:00"),
  },

  {
    title: "Ceiling fan making noise",
    description:
      "The ceiling fan in the classroom makes a loud rattling sound while running.",
    category: "Electrical",
    location: "Block A - Room 204",
    status: "Open",
    createdAt: new Date("2026-08-28T12:45:00"),
    image: {
      filename: "classroom-fan",
      url: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Hostel corridor needs cleaning",
    description:
      "The corridor on the third floor has not been cleaned properly and has accumulated dust.",
    category: "Cleanliness",
    location: "Hostel Block A - Third Floor",
    status: "Resolved",
    createdAt: new Date("2026-08-18T08:20:00"),
  },

  {
    title: "Computer keyboard damaged",
    description:
      "The keyboard connected to workstation 17 has several keys that do not respond.",
    category: "Equipment",
    location: "CS Lab 201 - Workstation 17",
    status: "Open",
    createdAt: new Date("2026-08-29T11:15:00"),
  },

  {
    title: "Elevator button not responding",
    description:
      "The button for the third floor inside the main building elevator does not respond consistently.",
    category: "Infrastructure",
    location: "Main Block - Elevator",
    status: "In Progress",
    createdAt: new Date("2026-08-17T15:45:00"),
    image: {
      filename: "elevator-button",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Cafeteria water dispenser leaking",
    description:
      "Water is leaking from the bottom of the dispenser near the cafeteria counter.",
    category: "Plumbing",
    location: "Main Cafeteria",
    status: "Open",
    createdAt: new Date("2026-08-30T12:10:00"),
  },

  {
    title: "Classroom door lock damaged",
    description:
      "The lock on the classroom door is difficult to operate and sometimes gets stuck.",
    category: "Maintenance",
    location: "Block B - Room 110",
    status: "In Progress",
    createdAt: new Date("2026-08-16T10:00:00"),
    image: {
      filename: "classroom-door",
      url: "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Projector remote missing",
    description:
      "The projector works normally but the remote control is missing from the classroom.",
    category: "Equipment",
    location: "Block C - Room 205",
    status: "Open",
    createdAt: new Date("2026-08-30T09:30:00"),
  },

  {
    title: "Footpath tile damaged",
    description:
      "Several tiles on the footpath near the main gate are loose and uneven.",
    category: "Infrastructure",
    location: "Main Gate",
    status: "In Progress",
    createdAt: new Date("2026-08-15T17:30:00"),
    image: {
      filename: "damaged-footpath",
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Hostel room light not working",
    description:
      "The main ceiling light in the room has stopped working.",
    category: "Electrical",
    location: "Hostel Block C - Room 214",
    status: "Resolved",
    createdAt: new Date("2026-08-14T20:15:00"),
  },

  {
    title: "Library chair damaged",
    description:
      "One of the chairs in the silent study area has a loose leg and needs repair.",
    category: "Furniture",
    location: "Central Library - Silent Study Area",
    status: "Open",
    createdAt: new Date("2026-08-30T14:20:00"),
    image: {
      filename: "library-chair",
      url: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Garbage bin overflowing",
    description:
      "The garbage bin near the student activity center is full and needs to be emptied.",
    category: "Cleanliness",
    location: "Student Activity Center",
    status: "Resolved",
    createdAt: new Date("2026-08-13T13:40:00"),
  },

  {
    title: "Lab monitor displaying lines",
    description:
      "The monitor at workstation 8 in the electronics lab displays horizontal lines across the screen.",
    category: "Equipment",
    location: "Electronics Lab",
    status: "In Progress",
    createdAt: new Date("2026-08-29T15:00:00"),
    image: {
      filename: "lab-monitor",
      url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Restroom hand dryer not working",
    description:
      "The hand dryer in the restroom near the auditorium does not turn on.",
    category: "Facilities",
    location: "Auditorium - Ground Floor",
    status: "Open",
    createdAt: new Date("2026-08-26T16:50:00"),
  },

  {
    title: "Classroom AC leaking water",
    description:
      "Water is dripping from the indoor AC unit and collecting near the front of the classroom.",
    category: "Maintenance",
    location: "Block A - Room 301",
    status: "In Progress",
    createdAt: new Date("2026-08-31T09:20:00"),
    image: {
      filename: "classroom-ac-leak",
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Campus notice board damaged",
    description:
      "The glass cover of the notice board near the administration office is cracked.",
    category: "Maintenance",
    location: "Administration Block",
    status: "Open",
    createdAt: new Date("2026-08-12T11:30:00"),
  },

  {
    title: "Sports equipment storage door stuck",
    description:
      "The door to the sports equipment room is getting stuck and requires considerable force to open.",
    category: "Maintenance",
    location: "Sports Complex",
    status: "Resolved",
    createdAt: new Date("2026-08-11T16:00:00"),
    image: {
      filename: "sports-storage",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Campus map board faded",
    description:
      "The campus map near the main entrance has faded and several labels are difficult to read.",
    category: "Facilities",
    location: "Main Entrance",
    status: "Open",
    createdAt: new Date("2026-08-10T10:10:00"),
    image: {
      filename: "campus-map-board",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    },
  },

  {
    title: "Power socket loose",
    description:
      "The power socket beside the last row of desks is loose and moves when a plug is inserted.",
    category: "Electrical",
    location: "Block B - Room 208",
    status: "Open",
    createdAt: new Date("2026-08-31T13:25:00"),
  },

  {
    title: "Hostel washing machine unavailable",
    description:
      "One of the washing machines in the common laundry room stops midway through the wash cycle.",
    category: "Equipment",
    location: "Hostel Block A - Laundry Room",
    status: "In Progress",
    createdAt: new Date("2026-08-24T18:40:00"),
    image: {
      filename: "hostel-washing-machine",
      url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    },
  },
];


module.exports = { data: sampleIssues }