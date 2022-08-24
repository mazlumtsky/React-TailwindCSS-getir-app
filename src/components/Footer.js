import React from 'react'
import Menu from '../ui/Menu';
import { BsFacebook, BsTwitter, BsGlobe, BsInstagram } from 'react-icons/bs'
import { Collapse } from 'react-collapse';
export default function Footer() {


  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Teknoloji Kariyerleri'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        },
      ]
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: 'Sıkça Sorulan Sorular'
        },
        {
          title: 'Kişisel Verilerin Korunması'
        },
        {
          title: 'Gizlilik Politikası'
        },
        {
          title: 'Kullanım Koşulları'
        },
        {
          title: 'Çerez Politikası'
        },
      ]
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: 'Bayimiz Olun'
        },
        {
          title: 'Deponuzu Kiralayın'
        },
        {
          title: 'GetirYemek Restoranı Olun'
        },
        {
          title: 'GetirÇarşı İşletmesi Olun'
        },
        {
          title: 'Zincir Restoranlar'
        },
      ]
    },
  ]


  return (
    <div className='bg-white   mt-10'>
      <div className='container mx-auto px-10 md:px-24 lg:px-28'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4  pt-10'>
          <section>
            <nav className='grid gap-y-3'>
              <h6 className='text-primary-brand-color text-lg'>Getir'i indirin!</h6>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
              </a>
              <a href='#' >
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
              </a>
              <a href='#' >
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => <Menu key={index} {...menu} />)}
        </div>
        <div className="flex  flex-col md:flex-row gap-y-2 justify-between items-center mt-4 p-6  border-t border-gray-200 py-6">
          <div className="text-gray-600">
            &copy; 2022 Getir
            <a href="#" className="text-primary-brand-color ml-2">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex  gap-x-3">
            <a href="#" className="  text-gray-500 hover:bg-purple-100 hover:text-primary-brand-color h-10 w-11 items-center justify-center flex transition-all rounded-lg">
              <BsFacebook size={21} />
            </a>
            <a href="#" className=" text-gray-500 hover:bg-purple-100 hover:text-primary-brand-color h-10 w-11 items-center justify-center flex transition-all rounded-lg">
              <BsTwitter size={21} />
            </a>
            <a href="#" className=" text-gray-500 hover:bg-purple-100 hover:text-primary-brand-color h-10 w-11 items-center justify-center flex transition-all rounded-lg">
              <BsInstagram size={21} />
            </a>
            <a href="#" className="border border-gray-200 flex items-center h-10 px-2 gap-x-2  text-gray-500 hover:bg-purple-100 hover:text-primary-brand-color transition-all rounded-lg">
              <BsGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>

        </div>
      </div>
    </div>
  )
}
