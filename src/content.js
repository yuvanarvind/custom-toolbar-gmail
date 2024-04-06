import * as InboxSDK from '@inboxsdk/core';

InboxSDK.load(2, "sdk_toolabr_64edead0a3").then((sdk) => {

  // Adding create ticket icon in the toolbar
  const appToolbarButtonDescriptor = {
    title: 'Create Ticket',
    iconUrl: 'https://img.icons8.com/ios-filled/50/ticket.png',
    onClick: async (event) => {
      try {
        // Retrieve selected threads
        // const authToken = process.env.AUTH_TOKEN;
        alert("Ticket Created Successfully")

        const selectedThreads = await sdk.Lists.getSelectedThreadRowViews();

        // Extract email details for each selected thread
        for (const thread of selectedThreads) {
          const sender = (await thread.getContacts())[0].emailAddress;
          const emailBody = await thread.getSubject();
          // const message = await thread.getMessageViews();
          // const emailBody = message.getBodyText();
          console.log("Sender Email ID:", sender);
          console.log("Email Body:", emailBody);

          fetch('https://abiendemoaccount.kapturecrm.com/add-ticket-from-other-source.html/v.2.0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic NTFrazhmejZ6ZWd5ejc1ZmJ6dDdlZXBwYzF0NTljNDg5Ympub2RkNzE2aGw4dW9nN3Y='
            },
            body: JSON.stringify([
                {
                    "title": emailBody,
                    "ticket_details": emailBody,
                    "email_id": sender
                }
              ])
          })
          .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
          })
          .then(data => {
                console.log('API Response:', data);
                // Handle the API response here
          })
          .catch(error => {
                console.error('Error:', error);
                // Handle errors here
          });

          // This is to create a proxy to avoid CORS error

          // const dataToSend = {
          //   sender: sender,
          //   emailBody: emailBody
          // };

          // Send data to your server
          // fetch('https://abiendemoaccount.kapturecrm.com/add-ticket-from-other-source.html/v.2.0', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify(dataToSend)
          // })
          // .then(response => response.json())
          // .then(data => {
          //   console.log('Response from server:', data);
          //   // Handle response from server if needed
          // })
          // .catch(error => {
          //   console.error('Error:', error);
          //   // Handle errors here
          // });

        }
      } catch (error) {
        console.error("Error:", error);
      }

      // Debugging: Log the event
      console.log("Create Ticket button - Global Toolbar: ", event);
    }
  };

  const appToolbarButtonView = sdk.Toolbars.registerThreadButton(appToolbarButtonDescriptor);

});
