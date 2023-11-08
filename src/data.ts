import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/dashboard/home",
          icon: HomeOutlinedIcon,
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: PersonOutlineOutlinedIcon,
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/dashboard/users",
          icon: PersonOutlineOutlinedIcon,
        },
        {
          id: 2,
          title: "Complaints",
          url: "/dashboard/complaints",
          icon: AssistantOutlinedIcon,
        },
        {
          id: 3,
          title: "Tasks",
          url: "/dashboard/Tasks",
          icon: TaskAltOutlinedIcon,
        },
        {
          id: 4,
          title: "Categories",
          url: "/Categories",
          icon: CategoryOutlinedIcon,
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];
