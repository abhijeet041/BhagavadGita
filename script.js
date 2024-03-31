document.addEventListener('DOMContentLoaded', function() {
    const verseList = document.getElementById('verse-list');
    const searchInput = document.getElementById('search-input');
    
    const chapters = [
      {
        number: 1,
        title: 'Chapter 1: Arjuna Vishada Yoga',
        verses: [
          { number: 1, text: 'धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1 ||', hindi: 'धृतराष्ट्र ने कहा: युद्ध लड़ने की इच्छा से कुरुक्षेत्र के पवित्र मैदान में एकत्रित होकर मेरी प्रजा और पांडवों ने क्या किया? हे संजय!', english: 'Dhritarashtra said: Having assembled on the holy plain in Kurukshetra desirous of fighting the battle, what did my people and the Pandavas do? O Sanjaya!' },
          { number: 2, text: 'सञ्जय उवाच ।दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा ।आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् || 2 ||', hindi: 'संजय ने कहा: युद्ध के लिए तैयार पांडव सेना को देखकर, राजा दुर्योधन अपने गुरु के पास गए और ये शब्द बोले:', english: 'Sanjaya said: On seeing the Pāndava army arrayed for battle, King Duryodhana went to his teacher and spoke these words: ' },
          { number: 3, text: '', hindi: 'हे आचार्य ! आपके बुद्भिमान शिष्य द्रु पदपुत्र धृष्टधुम्न द्वारा व्यूहाकार खड़ी की हुई पाण्डुपुत्रों की इस बड़ी भारी सेना को देखिए ।। 3 ।।', english: 'Behold O, Master, the mighty army of the sons of PANDU, led by the son of DRUPADA, your talented disciple' },
          { number: 4, text: '', hindi: 'अत्र शूरा महेष्वासा भीमार्जुनसमा युधि युयुधानो विराटश्च द्रुपदश्च महारथ: || 4||', english: 'Present here are the mighty archers, peers or friends, in warfare, of ARJUNA and BHIMA. Their names are: YUYUDHANA, VIRATA and DRUPADA, the great chariot-warrior.' },
          { number: 5, text: '', hindi: 'धृष्टकेतुश्चेकितान: काशिराजश्च वीर्यवान् | पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गव: || 5||', english: 'Other great warriors were also present on the battlefield: DHRSHTAKEUT, CHEKITANA and the brave and noble King of Kasi, KUNTIBHIJA and SAIBYA; these are among the great warriors.' },
          { number: 6, text: '', hindi: 'युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् । सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः || 6 ||', english: 'Other courageous and great chariot-warriors were: YUDHAMANYU, the brave UTTAMAUJA, SAUBHADRA, and the sons of DRAUPADI.' },
          { number: 7, text: '', hindi: '', english: 'O Best of the twice born, I name all of those who are our distinguished Chiefs, the leaders of my army, of your information only.' },
          { number: 8, text: '', hindi: '', english: 'Your wise self, BHISMA, KARNA, KRIPA, the victorious in fight; ASVATTHAMA, VIKARNA and SAUMADATTI as well.' },
          { number: 9, text: '', hindi: '', english: 'Yet several other heroes and great men, well-trained in combat, armed with assorted powerful weapons and missiles, are ready to lay down their lives for me!' },
          { number: 10, text: '',hindi: '', english: 'Our army, led by BHISMA, is numerous and skilled. The army led by BHIMA, however, is weak and lacking in strength and power.' },
          
        ]
      },
      {
        number: 2,
        title: 'Chapter 2: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 3,
        title: 'Chapter 3: ',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 4,
        title: 'Chapter 4: ',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 5,
        title: 'Chapter 5: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 6,
        title: 'Chapter 6: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 7,
        title: 'Chapter 7: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 8,
        title: 'Chapter 8: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 9,
        title: 'Chapter 9: Sankhya Yoga',
        verses: [
            { number: 1, text: '', hindi: '', english: '' },
            { number: 2, text: '', hindi: '', english: '' },
            { number: 3, text: '', hindi: '', english: '' },
            { number: 4, text: '', hindi: '', english: '' },
            { number: 5, text: '', hindi: '', english: '' },
            { number: 6, text: '', hindi: '', english: '' },
            { number: 7, text: '', hindi: '', english: '' },
            { number: 8, text: '', hindi: '', english: '' },
            { number: 9, text: '', hindi: '', english: '' },
            { number: 10, text: '', hindi: '', english: '' },
            
        ]
      },
      {
        number: 10,
        title: 'Chapter 10: Sankhya Yoga',
        verses: [
          { number: 1, text: '', hindi: '', english: '' },
          { number: 2, text: '', hindi: '', english: '' },
          { number: 3, text: '', hindi: '', english: '' },
          { number: 4, text: '', hindi: '', english: '' },
          { number: 5, text: '', hindi: '', english: '' },
          { number: 6, text: '', hindi: '', english: '' },
          { number: 7, text: '', hindi: '', english: '' },
          { number: 8, text: '', hindi: '', english: '' },
          { number: 9, text: '', hindi: '', english: '' },
          { number: 10, text: '', hindi: '', english: '' },
          
        ]
      },
      
    ];
  
    
    function displayFilteredVerses(searchTerm) {
      const filteredVerses = [];
      chapters.forEach(chapter => {
        chapter.verses.forEach(verse => {
          if (verse.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            filteredVerses.push(verse);
          }
        });
      });
  
    
      verseList.innerHTML = '';
      filteredVerses.forEach(verse => {
        const verseItem = document.createElement('div');
        verseItem.classList.add('verse-item');
        verseItem.innerHTML = `
          <h3>${verse.number}</h3>
          <p><strong>Sanskrit:</strong> ${verse.text}</p>
          <p><strong>Hindi:</strong> ${verse.hindi}</p>
          <p><strong>English:</strong> ${verse.english}</p>
        `;
        verseList.appendChild(verseItem);
      });
    }
  
    
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim();
      displayFilteredVerses(searchTerm);
    });
  
    
    function displayVerses() {
      chapters.forEach(chapter => {
        const chapterHeading = document.createElement('h2');
        chapterHeading.textContent = chapter.title;
        verseList.appendChild(chapterHeading);
        chapter.verses.forEach(verse => {
          const verseItem = document.createElement('div');
          verseItem.classList.add('verse-item');
          verseItem.innerHTML = `
            <h3>${verse.number}</h3>
            <p><strong>Sanskrit:</strong> ${verse.text}</p>
            <p><strong>Hindi:</strong> ${verse.hindi}</p>
            <p><strong>English:</strong> ${verse.english}</p>
          `;
          verseList.appendChild(verseItem);
        });
      });
    }
  
    displayVerses(); 
  });
  

