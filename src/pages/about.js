import React from "react"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"
import Image from "../components/Images/Images"
export default function About() {
  return (
    <Layout>
      <Image
        className="d-block mx-lg-auto img-fluid"
        filename={"AboutPic1.jpg"}
        alt="1"
      />
      <Team />
      <h1 class="display-10 fw-bold lh-1 mb-3 text-center text-success">
        About Us{" "}
      </h1>
      <div class="container col-xxl-20 px-2 py-2">
        <h2 class="display-10 fw-bold lh-1 mb-3 ">History</h2>
        <p class="lead">
          To realize a dream which he had cherished since his boyhood, Pandit
          Hiralal Shastri,the founding father of Banasthali Vidyapith, resigned
          his prestigious post of Secretary in the Home and Foreign Department
          in the erstwhile Jaipur State in 1927 and selected the remote village
          of Banthali(as Banasthali was originally called) as the centre of his
          life’s work.His plan was to organize a programme of rural
          reconstruction on the lines laid down by Gandhiji and also to train
          public workers through constructive service of the people.
        </p>

        <p class="lead">
          While so engaged in his work Shastriji also wanted to train his
          promising daughter Shantabai as a social worker dedicated to the cause
          of upliftment of women. But destiny ordained otherwise.All of a sudden,
          after a brief illness of a day, Shantabai bade farewell to Banasthali
          on 25th April, 1935 at the tender age of only 12 years. The loss
          seemed irreparable at the moment, but soon the mood of despondency
          gave way to a new hope. If one Shantabai had departed there were
          others who could be trained likewise. This idea gave solace and opened
          the path of action.
        </p>

        <p class="lead">
          To complete the unfinished task of his daughter, the Shri Shantabai
          Shiksha Kutir was started in October 1935 in the mud huts provided by
          the Jiwan Kutir, with about half-a-dozen girls.
        </p>

        <p class="lead">
          The name ‘Banasthali Vidyapith’ was adopted only in 1943. This also
          happened to be the year when undergraduate courses were first
          introduced. The institution was granted the status of a deemed
          university in 1983 by the UGC. Prof. Sushila Vyas , the first student
          of Banasthali Vidyapith was appointed the first Director of
          Vidyapith.The UGC committee which recommended the conferment of
          University status on the institution kept the following points in
          mind:
        </p>

        <p class="lead fw-bold text-success">
          (i) Vidyapith’s definite and viable programme for restructuring
          courses at the undergraduate level and its eagerness to carry out
          various measures to make education more meaningful and practical.
        </p>

        <p class="lead fw-bold text-success">
          (ii) availability of opportunities to the students to develop their
          personalities.
        </p>

        <p class="lead fw-bold text-success">
          (iii) Vidyapith’s initiative to inculcate spiritual and moral values
          in the students through various activities,emphasizing
          character-building and simplicity. With its autonomous status, the
          institute could now experiment,innovate and formulate its own
          curriculum and other activities.
        </p>

        <p class="lead">
          Under the tutelage of the Shastri family, Banasthali Vidyapith has
          grown from a school catering to only 6 students to the only
          residential women institute in the country that provides education to
          girls from the pre-primary stage up to the Doctoral level.
          <h6 className="text-warning">
            ( Date-Line of growth of Banasthali Vidyapith )
          </h6>
          Banasthali Vidyapith has been accredited by{" "}
          <h6 className="text-warning">
            Accredited with the highest possible grade 'A++' with CGPA 3.63/4.00
            by NAAC
          </h6>
        </p>

        <h2 class="display-10 fw-bold lh-1 mb-3 ">Vision And Mission</h2>
        <p class="lead">
          Banasthali Vidyapith has been conceptualized to materialize the ethos
          of nation-building and Indian Culture. Banasthali's whole architecture
          stands upon the twin foundation pillars of Nationalism and Indian
          Culture. Since its inception, Banasthali Vidyapith has had a clear
          perspective about its educational efforts and has possessed a vivid
          picture of the form and pattern of educational programme to be
          adopted.
        </p>

        <p class="lead">
          The architects of the Vidyapith believed that an educational programme
          should be able to promote the development of a balanced and harmonious
          personality of the students. Hence, the educational programme of the
          Vidyapith was distinct from the form of education prevalent at that
          time which emphasized book learning to utter neglect of all other
          aspects of education. Banasthali Vidyapith’s aim of a full and
          balanced development of students' personality got concrete expression
          in the form of 'Panchmukhi Shiksha' which evolved out of initial
          experimentation.
        </p>

        <p class="lead">
          Panchmukhi Shiksha attempts a balance of the five aspects of
          education, namely Physical, Practical, Aesthetic, Moral and
          Intellectual and aims at all round harmonious development of
          personality.
        </p>

        <p class="lead">
          Synthesis of spiritual values and scientific achievements of the East
          and the West is a key feature of the Vidyapith’s educational
          programme. Simple living, self-reliance and khadi wearing are
          hallmarks of life at Banasthali.
        </p>
      </div>
    </Layout>
  )
}
