let Resume={
    "Basic_Information": {
      "Name": "PATHAN SHAHID KHAN",
      "Email": "shahidballor@gmail.com",
      "Phone": 9848798955,
      "Degree": "Bachelor of Technology",
      "Location": {
        "Address": "Asif nagar jhirra, 4th line",
        "PinCode": 533007,
        "City": "Guntur",
        "State": "Andhra Pradesh",
        "Country": "India"
      }
    },    
    "Work_Experience": [//added it in an array since this can be modified in future with other companies experience
      {
        "Company_name": "Collabridge pvt ltd",
        "Position": "Linux System Administrator",
        "Joined_date": "21-10-2021",
        "End_date": "20-06-2023",
        "Summary": "I was a lead 1 LInux Administartor taking care of virtual servers and Incident tickets",
      },
    ],
    "Education": [//added it in array since education can be modified if one prefers higher education
      {
        "Institution": "National Institute of Technology Warangal",
        "Department": "Chemical Engineering",
        "Start_year": 2017,
        "End_year": 2021,
        "GPA": 8.5,
      }
    ],
    "skills": [//added it in an array since later learned skills can be modified
      {
        "Name": "JavaScript,HTML",
        "Proficiency": "Intermidiate",       
      }
    ],
    "Languages": "Enlish,Hindi,Telugu,Urdu",
    "Interests": "Reading documentation's related to Full stack development"
    }
  console.log(Resume);