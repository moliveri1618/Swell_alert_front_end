//example

// function getUsers() {
//     return fetch('https://api.example.com/users')
//       .then(response => response.json())
//       .then(data => {
//         return data;
//       });
//   }
  
//   export { getUsers };



// In your React component, import the API functions from the api.js file and use 
// them as needed. Here's an example of a React component that uses the getUsers API function:
// import { getUsers } from './api';

// function MyComponent() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers().then(data => {
//       setUsers(data);
//     });
//   }, []);

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// }
