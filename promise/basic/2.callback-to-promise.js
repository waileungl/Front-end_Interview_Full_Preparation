//* call back function
const isServerUp = true;

function getFileFromServer(successCallback, failureCallback) {
  setTimeout(() => {
    if (isServerUp) {
      successCallback();
    } else {
      failureCallback();
    }
  }, 2000);
}

getFileFromServer(
  () => {
    console.log("File downloaded"); //this is consider a call back function
  },
  () => {
    console.log("Failed to download the file"); //this is consider a call back function
  }
);

//* Now Let's convert this callback into a promise

const downloadFile = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isServerUp) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

downloadFile
  .then(() => {
    console.log("File downloaded");
  })
  .catch(() => {
    console.log("Failed to download the file");
  });

  /* a callback is a function that is passed as an argument to another function and is executed when the parent function is completed or when a certain event occurs.*/