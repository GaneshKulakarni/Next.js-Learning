import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div>
      <Script id='welcome'>
        {`alert("Welcome to Contact Page");`}
      </Script>
      this is contact page
    </div>
  )
}

export default page
export const metadata = {
  title: "Contact Page- Connect with the people",
  description: "this is FaceBooks contact page we can conect with the stranger and friends",
};
