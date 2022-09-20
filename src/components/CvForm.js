import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';

function CvForm() {
  return (
    <form>
      <Personal />
      <br />
      <Education />
      <br />
      <Experience />
      <br />
      <button>Create CV</button>
      <br />
    </form>
  );
}

export default CvForm;
