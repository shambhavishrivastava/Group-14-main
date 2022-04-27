import React from "react"
import { Link } from "gatsby"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import Image from "../Images/Images"

const Items = [
  {
    image: "Aditi Singh",
    name: "Aditi Singh",
    facebook: "https://www.facebook.com",
    instagram:
      "https://www.instagram.com/invites/contact/?i=qn2cn6zzqm45&utm_content=38bz8zt",
    linkedin: "https://www.linkedin.com/in/aditi-singh-4236811a9",
  },
  {
    image: "Aishal Khan",
    name: "Aishal Khan",
    facebook: "https://www.facebook.com/aishal.khan.967",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com/in/aishal-khan-806116238",
  },
  {
    image: "Laiba Afsar",
    name: "Laiba Afsar",
    facebook: "https://www.facebook.com",
    instagram: "https://instagram.com/lavi201200?igshid=YmMyMTA2M2Y=",
    linkedin: "https://www.linkedin.com/in/laiba-afsar-19a26417b/",
  },
  {
    image: "Shambhavi",
    name: "Shambhavi Shrivastava",
    facebook: "https://www.facebook.com/riya.shambhavi",
    instagram: "https://instagram.com/riya_verma_2612?igshid=YmMyMTA2M2Y=",
    linkedin: "https://www.linkedin.com/in/shambhavi-shrivastava-b4917920b",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">Team Members</h2>
      <div className="row justify-content-center py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card card-body shadow mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "250px",
                    width: "200px",
                  }}
                  filename={`${item.image}.jpg`}
                  alt="1"
                />
                <h4 className="m-2">{item.name}</h4>

                <ul className="list-unstyled justify-content-center d-flex mb-0">
                  <Link className="m-3" to={item.facebook}>
                    <Facebook />
                  </Link>
                  <Link className="m-3" to={item.instagram}>
                    <Instagram />
                  </Link>
                  <Link className="m-3" to={item.linkedin}>
                    <Linkedin />
                  </Link>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
