// "use client";

// import { SignUp } from '@clerk/nextjs';
// import { useEffect, useState } from 'react';
// import { useUser } from '@clerk/nextjs';

// export default function SignInPage() {
//     const { user, isLoaded, isSignedIn } = useUser();
//     const [loading, setLoading] = useState(true); // State to manage loading

//     useEffect(() => {
//         const storeUserInDatabase = async () => {
//             if (!isLoaded || !isSignedIn || !user) {
//                 console.log("User is not loaded, not signed in, or user object is missing.");
//                 return;
//             }

//             const userData = {
//                 clerkId: user.id,
//                 email: user.emailAddresses[0]?.emailAddress, // Get the primary email
//             };

//             console.log("Storing user data in database:", userData);

//             try {
//                 const response = await fetch('/api/user/check', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(userData),
//                 });

//                 if (!response.ok) {
//                     throw new Error('Failed to store user data');
//                 }

//                 const data = await response.json();
//                 console.log('User stored in DB:', data);
//             } catch (error) {
//                 console.error('Error storing user data:', error);
//             }
//         };

//         if (isLoaded) {
//             console.log("User loaded, checking if signed in...");
//             storeUserInDatabase();
//             setLoading(false); // Set loading to false once the effect is complete
//         } else {
//             console.log("User not loaded yet...");
//         }
//     }, [isLoaded, isSignedIn, user]);

//     // Show loading spinner or message while waiting for authentication
//     if (loading) {
//         console.log("Loading, waiting for authentication...");
//         return <div>Loading...</div>;
//     }

//     // Only show SignIn if the user is not signed in
//     if (!isSignedIn) {
//         console.log("User is not signed in, rendering SignIn component.");
//         return (
//             <div>
//                 this is signup
//                 <SignUp />
//             </div>
//         );
//     }

//     console.log("User is signed in, nothing to render.");
//     return null; // Render nothing if the user is signed in and ready
// }
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}
