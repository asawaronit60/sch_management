define({ "api": [
  {
    "type": "post",
    "url": "/admissionEnquiry/createEnquiry",
    "title": "",
    "name": "create_enquiry",
    "group": "Admission_Enquiry",
    "description": "<p>Create a api description</p>",
    "body": [
      {
        "group": "Body",
        "type": "Integer",
        "optional": false,
        "field": "id",
        "description": ""
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "source",
        "description": "<ul> <li>source of the enquiry</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<ul> <li>Name of user</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<ul> <li>Email of user</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "phone",
        "description": "<ul> <li>Phone of user</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "address",
        "description": "<ul> <li>Address of user</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "enquiry",
        "description": "<p>date - date of enquiry</p>"
      },
      {
        "group": "Body",
        "type": "Date",
        "optional": false,
        "field": "last",
        "description": "<p>follow up date</p>"
      },
      {
        "group": "Body",
        "type": "Date",
        "optional": false,
        "field": "next",
        "description": "<p>follow up date</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "description",
        "description": "<ul> <li>detailed description</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "status",
        "description": "<ul> <li>status of enquiry ACTIVE/INACTIVE</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "note",
        "description": "<ul> <li>Note on enquiry</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "assigned",
        "description": "<ul> <li>Assigned person</li> </ul>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "referenced",
        "description": "<ul> <li>referenced</li> </ul>"
      },
      {
        "group": "Body",
        "type": "Integer",
        "optional": false,
        "field": "no_of_child",
        "description": "<ul> <li>No of admiussion count of children</li> </ul>"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Failed",
            "description": "<p>to create enquiry</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationRequiredError",
            "description": "<p>You are not logged in! Please login to get access</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<ul> <li>Enquiry created successfully</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"message\": \"Enquiry added successfully\" \n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admissionEnquiry.js",
    "groupTitle": "Admission_Enquiry"
  },
  {
    "type": "get",
    "url": "/admissionEnquiry/getAllEnquiry",
    "title": "",
    "name": "get_all_admissions_enquiries",
    "group": "Admission_Enquiry",
    "description": "<p>This is for getting list of all the enquiry</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<ul> <li>source of the enquiry</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Name of user</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Email of user</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<ul> <li>Phone of user</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<ul> <li>Address of user</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enquiry",
            "description": "<p>date - date of enquiry</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last",
            "description": "<p>follow up date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "next",
            "description": "<p>follow up date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>detailed description</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<ul> <li>status of enquiry ACTIVE/INACTIVE</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<ul> <li>Note on enquiry</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assigned",
            "description": "<ul> <li>Assigned person</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "referenced",
            "description": "<ul> <li>referenced</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "no_of_child",
            "description": "<ul> <li>No of admiussion count of children</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        \"id\": 1,\n        \"source\": \"Front office\",\n         \"name\": \"Ronit\",\n         \"email\": \"asawaronit@gmail.com\",\n         \"phone\": \"7023262146\",\n         \"address\": \"banglore\",\n         \"enquiry_date\": \"1980-06-17\",\n         \"last_followUp_date\": null,\n         \"next_followUp_date\": null,\n         \"status\": \"active\",\n         \"note\": \"this is a note\",\n         \"description\": \"this is description\",\n         \"assigned\": \"Bradon heart\",\n         \"referenced\": \"Parent\",\n         \"no_of_child\": 2,\n         \"createdAt\": \"2022-05-23T06:12:40.000Z\",\n         \"updatedAt\": \"2022-05-23T06:12:40.000Z\"\n     } \n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Data",
            "description": "<p>not found Not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admissionEnquiry.js",
    "groupTitle": "Admission_Enquiry"
  }
] });
