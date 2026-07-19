const employees = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 3,
      failed: 2,
      newTask: 3
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
         taskTitle: "Prepare Sales Report",
        taskDescription: "Compile the weekly sales report.",
        taskDate: "2026-07-18",
        category: "Sales"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Update CRM",
        taskDescription: "Add new customer details to CRM.",
        taskDate: "2026-07-15",
        category: "CRM"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,

        taskTitle: "Client Meeting",
        taskDescription: "Attend online client meeting.",
        taskDate: "2026-07-14",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "employee2@example.com",
    password: "123",
        taskCount: {
      active: 3,
      completed: 5,
      failed: 1,
      newTask: 2
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue.",
        taskDate: "2026-07-19",
        category: "Development"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Code Review",
        taskDescription: "Review pull requests.",
        taskDate: "2026-07-16",
        category: "Development"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: true,

        taskTitle: "Deploy API",
        taskDescription: "Deploy latest API build.",
        taskDate: "2026-07-13",
        category: "Deployment"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Write Unit Tests",
        taskDescription: "Increase code coverage.",
        taskDate: "2026-07-20",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    name: "Michael Brown",
    username: "michaelbrown",
    email: "employee3@example.com",
    password: "123",
        taskCount: {
      active: 6,
      completed: 2,
      failed: 2,
      newTask: 3
    },
    tasks: [
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Design Homepage",
        taskDescription: "Create homepage UI in Figma.",
        taskDate: "2026-07-12",
        category: "Design"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Create Icons",
        taskDescription: "Design custom icons.",
        taskDate: "2026-07-18",
        category: "Design"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: true,

        taskTitle: "Banner Design",
        taskDescription: "Create marketing banner.",
        taskDate: "2026-07-10",
        category: "Marketing"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Prototype Dashboard",
        taskDescription: "Prepare dashboard prototype.",
        taskDate: "2026-07-22",
        category: "UI/UX"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Update Color Palette",
        taskDescription: "Revise brand colors.",
        taskDate: "2026-07-11",
        category: "Branding"
      }
    ]
  },
  {
    id: 4,
    name: "Emily Davis",
    username: "emilydavis",
    email: "employee4@example.com",
    password: "123",
        taskCount: {
      active: 1,
      completed: 3,
      failed: 2,
      newTask: 4
    },
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Write Blog Post",
        taskDescription: "Create article for company blog.",
        taskDate: "2026-07-21",
        category: "Content"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Social Media Post",
        taskDescription: "Publish LinkedIn update.",
        taskDate: "2026-07-16",
        category: "Marketing"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "SEO Audit",
        taskDescription: "Analyze website SEO.",
        taskDate: "2026-07-23",
        category: "SEO"
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: true,

        taskTitle: "Newsletter",
        taskDescription: "Send monthly newsletter.",
        taskDate: "2026-07-09",
        category: "Email"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Keyword Research",
        taskDescription: "Research trending keywords.",
        taskDate: "2026-07-14",
        category: "SEO"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Campaign Planning",
        taskDescription: "Prepare ad campaign.",
        taskDate: "2026-07-25",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    name: "David Wilson",
    username: "davidwilson",
    email: "employee5@example.com",
    password: "123",
        taskCount: {
      active: 3,
      completed: 0,
      failed: 0,
      newTask: 3
    },
    tasks: [
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Database Backup",
        taskDescription: "Backup production database.",
        taskDate: "2026-07-15",
        category: "Database"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance.",
        taskDate: "2026-07-20",
        category: "Database"
      },
      {
        active: false,
        completed: false,
        failed: true,
        
        taskTitle: "Server Maintenance",
        taskDescription: "Perform scheduled maintenance.",
        taskDate: "2026-07-08",
        category: "Infrastructure"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Monitor Logs",
        taskDescription: "Review server logs.",
        taskDate: "2026-07-18",
        category: "Monitoring"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Create Database Indexes",
        taskDescription: "Improve search performance.",
        taskDate: "2026-07-13",
        category: "Database"
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: true,

        taskTitle: "Security Audit",
        taskDescription: "Check database permissions.",
        taskDate: "2026-07-24",
        category: "Security"
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: true,

        taskTitle: "Storage Cleanup",
        taskDescription: "Remove unused backups.",
        taskDate: "2026-07-17",
        category: "Maintenance"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name:"admin",
    email: "admin@example.com",
    password: "123"
  }
];  

export const setLocalStorage=()=>{
  localStorage.setItem("employee",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employee =JSON.parse( localStorage.getItem('employee'))
 const admin =JSON.parse( localStorage.getItem('admin'))
 
//  console.log(employee);
//  console.log(admin);
 
return {employee,admin}
}