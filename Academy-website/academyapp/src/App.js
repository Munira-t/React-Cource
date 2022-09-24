/** import css files */
import './App.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


/** import componant */
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import Card from './components/Card.js'
import Course from './components/Course.js'
import Footer from './components/Footer.js'

/** images */
import card1 from '../src/assets/images/card1.svg'
import card2 from '../src/assets/images/people-group.svg'
import card3 from '../src/assets/images/graduate.svg'
import reactcourse from '../src/assets/images/react-course.svg'
import netcourse from '../src/assets/images/Net-course.svg'
import uiuxcourse from '../src/assets/images/uiuxcourse.svg'
import fluttercourse from '../src/assets/images/fluttercourse.svg'
import javacourse from '../src/assets/images/javacourse.svg'
import alipacourse from '../src/assets/images/alipapacourse.svg'

import Zoom from 'react-reveal/Zoom';


function App() {
  return (
     <div className= "App">
    <Nav/>
    <Main/>

    <section className='about-us container d-flex justify-content-center align-items-center gap-5 '>
    <Fade bottom><Card cardimg={card1} imgTitle='عدد المبادرات' number='150+' cardText='معسكر وفعالية'/></Fade>
    <Fade bottom> <Card cardimg={card2} imgTitle='عدد المستفيدين' number='120,000+' cardText='طالب وطالبة'/></Fade>
    <Fade bottom><Card cardimg={card3} imgTitle='عدد المسجلين' number='124,000+' cardText='طالب وطالبة'/></Fade>
    </section>

    <section id='courses 'className='courses'>
      <div className='courses-container gap-5'>
      <h3 className='ff-almarai mb-5 '>أحدث البرامج:</h3>
      <div className='course-content justify-items-center mt-5'>

        <div className='row gap-5 mt-5'>
          <div className='col'><Slide bottom><Course img={reactcourse} status='متاح' title='مقدمة في React' text='حضوري' desc='ستتعلم خلال هذه الدورة كيفية استخدام مكتبة React وأهم المصطلحات والأدوات الأساسية التي تُساعد في تسهيل عملية بناء الواجهات الأمامية.'
          /></Slide></div>

          <div className='col'><Slide bottom><Course img={netcourse} status='متاح' title='أساسيات البرمجة باستخدام .NET
' text='حضوري' desc='ستتعلم خلال هذه الدورة كيفية استخدام مكتبة React وأهم المصطلحات والأدوات الأساسية التي تُساعد في تسهيل عملية بناء الواجهات الأمامية.'/></Slide></div>


          <div className='col'><Slide bottom><Course img={uiuxcourse}  title='مقدمة في تصميم واجهات وتجربة المستخدم
' text='حضوري' desc='تعرف على الخطوات المتبّعة في بناء واجهة وتجربة المستخدم، من خلال العبور على مجموعة من المفاهيم والخطوات منها: مرحلة البحث، مرحلة التصميم المبدئي، وتصميم النموذج النهائي للمشروع.'/></Slide></div>
        </div>

        <div className='row gap-5 mt-5'>
          <div className='col'><Slide bottom><Course img={fluttercourse} status='متاح' title='Flutter' text='حضوري' desc='من خلال هذه الدورة ستتعلم بناء تطبيقات باستخدام Flutter Framework وأساسيات بناء تطبيقات Android and iOS والتي تشمل بناء الواجهات Layout، ومفاهيم التنقل بين الواجهات باستخدام Navigation و Architecture Components...'

          
          /></Slide></div>

          <div className='col'><Slide bottom><Course img={javacourse} status='متاح' title='دورة أساسيات لغة JAVA' text='حضوري' desc='ستتعلم في هذه الدورة أساسيات لغة JAVA والتي تعد من أشهر اللغات البرمجية، حيث ستفتح لك آفاق في عالم تطوير المواقع والتطبيقات وغيرها.'/></Slide>
          </div>

          <div className='col'><Slide bottom><Course img={alipacourse} status='مغلق' title='معسكر طويق وعلي بابا للحوسبة السحابية' text='حضوري' desc='يهدف المعسكر لإعداد الكوادر الشبابية السعودية وتدريبهم لشغل وظائف متميّزة في مجال الحوسبة السحابية والتكنولوجيا.
يوفّر البرنامج للمشاركين تدريباً متخصصاً في المجالات الحيوية ...'/></Slide>
          </div>
        </div>
      </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default App;