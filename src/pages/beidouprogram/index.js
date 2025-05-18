import Navbar from '@/components/Navbar'
import Button from '@/components/Beidou/Button'
import Tile from '@/components/Beidou/Title'
import backPic from '@/assets/beidouprogram/image-back.png'
import Pic_1 from '@/assets/beidouprogram/image-1.svg'
import './Beidou.scss'
import ContentItem1 from '@/components/Beidou/Content_1'
import ContentItem2 from '@/components/Beidou/Content_2'
import ContentItem3 from '@/components/Beidou/Content_3'
import Person from '@/components/Beidou/Person'
import Footer from '@/components/Footer'
const Program = () => {

  const Content_1 = [
    {title:"丰富的场景、海量的数据",content:"美团既有大模型、自动配送车、无人机、搜广推等精尖技术的应用场景，也有客服、销售等业务流程的改善空间。<br><br>近7亿用户，亿级的日订单量，为技术提升提供充足的数据资源。",src:"1-1.png"},
    {title:"AI领域领先的算力、人均算力资源",content:"数万卡的资源，足以面对近期挑战；不赛马，人均算力资源行业领先",src:"1-2.png"},
    {title:"行业领先的技术团队",content:"行业大咖、顶会作者，坚持招了7年的百余名北斗。",src:"1-3.png"},
    {title:"极具竞争力的薪酬",content:"别家给得起的，我们都给得起！",src:"1-4.png"}
  ]
  
  const Content_2 = [
    {title:"超级学霸",content:"相关专业TOP5%学生<br>基础学科能力扎实",src:"2-1.png"},
    {title:"学术达人",content:"在国际顶级会议或期刊上发表过<br>重要学术论文，或获得过计算机<br>相关领域专利",src:"2-2.png"},
    {title:"竞赛大神",content:"国内外顶级大赛（如ACM-ICPC、<br>NOI等）获奖经历",src:"2-3.png"},
    {title:"工程高手",content:"拥有丰富的项目或实习经验，有<br>将技术运用到实际场景的实践成<br>果",src:"2-4.png"}
  ]

  const Content_3 = [
    {headline:'大模型与AIGC',
      contentArr:[
        {title:'大模型技术研究',content:'关注预训练，指令微调和强化学习等对齐技术，大模型安全性与可靠性研究等'},
        {title:'大模型训练、推理技术研究',content:'关注大模型在GPU集群训练效率与稳定性、构建高性能推理服务等'},
        {title:'多模态理解与生成研究',content:'关注文本、图像、视频、音频等多个模态的生成技术研究等'},
        {title:'大模型应用探索',content:'关注RAG、Agent的研究，持续探索大模型在搜广推等场景的应用等'}
      ]
    },
    {headline:'自动驾驶技术研究',
      contentArr:[
        {title:'自动驾驶感知算法研究',content:'关注多模态大模型在自动驾驶场景中的适配和优化、搭建从传感器数据到行为决策的端到端模型等'},
        {title:'自动驾驶仿真技术研究',content:'关注交通行为仿真、传感器仿真、端到端仿真等仿真技术的研究'},
        {title:'自动驾驶决策规划研究',content:'关注多模态端到端自动驾驶算法，交互预测决策模型算法，大模型预训练、SFT、Alignment算法技术等'},
        {title:'自动驾驶高精地图研究',content:'关注静态感知、3D重建和场景生成算法、具身智能与环境认知等'}
      ]
    },
    {headline:'视频编解码',
      contentArr:[
        {title:'视频画质评价算法研究',content:'关注基于深度学习及计算机视觉算法的无参考视频画质评价算法的研究等'},
        {title:'视频画质增强算法研究',content:'关注针对美团直播、短视频场景的画质增强算法研究、视频前处理、后处理阶段画质增强算法的实现等'},
        {title:'视频智能创作算法研究',content:'探索基于美团直播、短视频场景的视频、图片AIGC相关算法的业务场景落地等'}
      ]
    },
    {headline:'无人机技术研究',
      contentArr:[
        {title:'无人机规划调度算法研究',content:'关注无人机负责场景的处理能力，系统性处理无人机空中交通问题等'},
        {title:'无人机感知算法研究',content:'探索模型结构设计、模型自学习等无人机感知方向的基础模型研发，并应用于目标检测、全局定位等下游任务中等'},
        {title:'无人机设备端软件架构设计',content:'参与无人机及相关硬件产品线的设备端软件架构设计，开发设计平台架构软件等'},
        {title:'无人机系统安全与适航研究',content:'参与无人机适航和机器人安全体系建设，关注先进安全性设计分析，如具身智能和人机交互频繁的情况下的产品安全性设计和分析方法的研究等'},
        {title:'机器人技术研究',content:'关注机器人开发关键技术，如关节设计、灵巧机械手、电驱动和传动系统、控制系统、机器视觉、边缘计算等'}
      ]
    },
    {headline:'运筹优化和智能调度',
      contentArr:[
        {title:'调度决策模型探索',content:'关注调度系统内多样的调度决策行为分析，探索场景化适配的模型预测、决策能力等'},
        {title:'供应链预测研究',content:'关注不同供应链场景中的预测准确度，建设预测和运筹优化相结合的端到端的决策算法等'}
      ]
    }
  ]

  const PersonArr = [
    {name:'刘宝旭',experience:[
      '北京航空航天大学硕士',
      '无人机团队飞行控制组技术专家',
      '从校招生起成长为带领团队的技术专家',
      '从事控制方向的研发落地工作，提升无人机、自动化装备的稳定性、精度和效率'
    ],pic:'4-1',oldW:'349.84'},
    {name:'蔡剑成',experience:[
      '中国科学院大学硕士',
      '竞赛大神',
      '负责无人机机载视觉算法研究'
    ],pic:'4-2',oldW:'246.26'},
    {name:'石文杰',experience:[
      '清华大学博士',
      '学术达人',
      '负责解决自动车的快速定位问题，让自动车成为了懂得礼让、能灵活绕道的“配送小能手”'
    ],pic:'4-3',oldW:'451.88'},
    {name:'李亚蓓',experience:[
      '中国科学院大学博士',
      '学术达人',
      '在职期间攻克基于lidar的3D障碍物检测中的大车检测, 多视角融合等难题'
    ],pic:'4-4',oldW:'287.7'}
  ]

  return (  
    <div className='beidou'>
      {/* 1. 顶部 */}
      <Navbar/>

      {/* 2. 主体 */}
      <main class="beidou-content">
        <img class="background-img" 
          alt="美团北斗计划背景图" loading="lazy" 
          src={backPic} 
        />

        <div class="beidou-title">
          <div class="main-title">
            <div class='main-title-row'>
              北斗计划
              <img src={Pic_1} alt=''></img>
            </div>
            <div class='main-title-row'>
              面向全球招募精尖校园科技人才
            </div>
          </div>
          <div
            class="sub-title"
          >期待一起用科技造福亿万用户与商家，让科技走向烟火人间！</div>
          <div class="title-button">
            <Button data={'应届职位'}/>
            <Button data={'实习职位'}/>
          </div>
        </div>
        <section className='beidou-content-item'>
          <Tile id='1' content='我们能给你什么?'/>

          <div className='beidou-content-row-one'>
            {
              Content_1.map((item)=>
                <ContentItem1 title={item.title} content={item.content} src={item.src}/>)
            }
          </div>
        </section>

        <section className='beidou-content-item'>
          <Tile id='2' content='我们期待怎样的你?'/>
          
          <div className='beidou-content-title'>
            <h5>
              非常、非常、非常想用科技 让这个世界更美好！
            </h5>
            <h6>
              毕业时间：2024年1月-2025年12月（不限学历）
            </h6>
          </div>

          <div className='beidou-content-row-two'>
            {Content_2.map((item)=>
              <ContentItem2 title={item.title} content={item.content} src={item.src}/>
            )}
          </div>

        </section>

        <section className='beidou-content-item'>
          <Tile id='3' content='我们提供哪些职位?'/>

          <div className='beidou-content-row-three'>
            <div className='beidou-content-row-three-left'>
              {Content_3.map((item,index)=>{
                if(index%2===0){
                  return <ContentItem3 headline={item.headline} contentArr={item.contentArr}/>
                }
                return undefined;
              })}
            </div>
            <div className='beidou-content-row-three-right'>
              {Content_3.map((item,index)=>{
                if(index%2===1){
                  return <ContentItem3 headline={item.headline} contentArr={item.contentArr}/>
                }
                return undefined;
              })}
            </div>
          </div> 

          <div className='item-foot'>
            <h6>热招职位包括但不限于上述方向，欢迎点击链接了解详情</h6>
            <Button data="更多职位"/>
          </div>
        </section>

        <section className='beidou-person'>
          <h2>北斗人物</h2>
          <div className='person-container'>
            {PersonArr.map((item)=>
              <Person name={item.name} experience={item.experience} pic={item.pic} oldW={item.oldW}/>
            )}
          </div>
        </section>
      </main>

      {/* 3. 底部  */}
      <Footer/>
    </div>
  )
}
export default Program;