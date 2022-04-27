import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
export default function Contact() {
  return (
  <Layout>
    <Image 
             className="d-block mx-lg-auto img-fluid"
             filename={"ContactPic1.png"}
             alt="1"
             />
    <div className="container py-5">
      <h1 className="card shadow text-center bottom- border text-info">We Are Here To Listen You</h1>
      <h6 className="card shadow text-center m-2 p-4 ">

<form name="contact" netlify>
  <p>
    <label>Name <input type="text"  name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Department <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Query/Suggestions <input type="text" name="name" /></label>
  </p>
  <p>
    <button 
    type="submit" 
    className="btn btn-outline-success"
    >
      Send
      </button>
  </p>
</form>
</h6>

  <table class="table table-lg table-hover">
  <thead>
  <tr class="table-success">
      <th scope="col">Name of Office</th>
      <th scope="col">Phone no.</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Vice-Chancellor</td>
      <td>01438- 228787</td>
      <td><p>inashastri@banasthali.in</p>
      vc@banasthali.in
      </td>
    </tr>
    <tr>
      <td scope="row">Dean Administration</td>
      <td>01438-228456</td>
      <td>deanadmin@banasthali.ac.in</td>
    </tr>
    <tr>
      <td scope="row">Addl. Registrar, Academic Section</td>
      <td>01438- 228950, 228989</td>
      <td>mittal_hl@yahoo.co.in</td>
    </tr>
    <tr>
      <td scope="row">Examination Section</td>
      <td>01438-228524</td>
      <td>exam@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Results Section</td>
      <td>01438-228950</td>
      <td>results@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Finance & Accounts</td>
      <td>01438-228546, 228644</td>
      <td>lekhavibhag@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Karmik Anubhag</td>
      <td>01438-228376</td>
      <td>-</td>
    </tr>
    <tr>
      <td scope="row">Research Section</td>
      <td>01438-228989</td>
      <td>researchbanasthali@banasthali.in</td>
    </tr>
    <tr class="table-success">
      <th scope="col">Placement office(s)</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr> 
    <tr>
      <td scope="row">Computer Science and Engineering</td>
      <td>9352141479</td>
      <td>campusplacement@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Management</td>
      <td>9410111228</td>
      <td>iic@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Design</td>
      <td>9352878377</td>
      <td>admin.bid@banasthali.in</td>
    </tr>
    <tr>
      <td scope="row">Life-sciences, Pharmacy, Chemical & all other programmes</td>
      <td>9352879809, 9783774453</td>
      <td><p>placements@banasthali.in</p>bio_chem_pharma@banasthali.in</td>
    </tr>
      <tr class="table-success">
      <th scope="col">School Section</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    <tr>
      <td scope="row">Primary School (Saraswati Mandir)</td>
      <td>01438-228479</td>
      <td>pschool@banasthali.ac.in</td>
    </tr>
    <tr>
      <td scope="row">Senior Secondary School (Sharda Mandir)</td>
      <td>01438-228383</td>
      <td>sschool@banasthali.ac.in</td>
    </tr>
      <tr class="table-success">
      <th scope="col">Guest House</th>
      <td scope="col">01438-228913</td>
      <td scope="col">-</td>
    </tr>
      <tr class="table-success">
      <th scope="col">Fax</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    <tr>
      <td scope="row">Banasthali Campus</td>
      <td>01438-228365/228587</td>
      <td>-</td>
    </tr>
    <tr>
      <td scope="row">Apaji Institute</td>
      <td>01438-228989</td>
      <td>01438-228649</td>
    </tr>
    
  </tbody>
  </table>
  <div>
  <p><h5><u>Admission Enquiry:</u></h5>
    <i>Phone:</i> 01438-228384, 228990</p>
    <p><i>Mobile:</i> +91- 93528 79844, 93528 79855, 93528 79866</p>
     <b>E-Mail:</b>
     <p><ul><i>Higher Education:</i> admissions@banasthali.in</ul>
     <ul>
     <i>School Education:</i>
                <li>For IX & XI :-       shardamandir@banasthali.in</li>
                <li>For VI :-               saraswatimandir@banasthali.in </li>  
                </ul> </p>
<b>Toll Free No:</b> 1800-270-5855

<p><b>Postal Address:</b> Banasthali Vidyapith,
                      P.O. Banasthali Vidyapith-304022 (Rajasthan)
</p>
  </div>
  </div>
</Layout>)
}
