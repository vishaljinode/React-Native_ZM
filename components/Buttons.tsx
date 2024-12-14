import { Alert, Button, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const openPlayStore = () => {
  const url = 'market://details?id=com.javerchand_meghani.zaverchand_meghani';
  Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
};

const openInstagramProfile = () => {
  const url = 'https://www.instagram.com/zaverchand.meghani';
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const htmlContent = `

<h1>CopyRight</h1> 
<hr><strong>Indian Copy Right Act 1957</strong>
<p>This work is now in the public domain as this work was published in India and its publishing rights have expired. Under the Indian Copyright Act, 1957, every literary, dramatic, musical and artistic work (other than photographs) published during the lifetime of the creator (section 22) shall be published after the death of the creator (ie, for the year 2024, at least 1 January (before 1964) comes under public domain after 60 years. Works published posthumously (Vol. 24), photographs (Vol. 25), films (Vol. 26), and phonograms (Vol. 27) fall under the public domain 60 years after their publication.</p>


<hr>
<h1>Privacy Policy</h1>    
<p>This privacy policy applies to the Zaverchand Meghani app (hereby referred to as "Application") for mobile devices that was created by (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".</p>
<p>The Application does not gather precise information about the location of your mobile device.</p>
<div style="display: none;">
<p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
<ul>
    <li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
    <li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
    <li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
</ul>
</div>
<hr>
<p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
<hr>
<p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described
in this privacy policy.</p>
<hr><strong>Third Party Access</strong>
<p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described
in this privacy statement.</p>
<div>
<hr>
<p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
<ul>
    <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
    <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
    
    <li><a href="https://onesignal.com/privacy_policy" target="_blank" rel="noopener noreferrer">One Signal</a></li>
    
</ul>
</div>
<hr>
<p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
<ul>
<li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
<li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
<li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
</ul>
<hr><strong>Opt-Out Rights</strong>
<p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
<hr><strong>Data Retention Policy</strong>
<p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at insta.meghani@gmail.com
and they will respond in a reasonable time.</p>
<hr><strong>Children</strong>
<p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
<div>
<hr>
<p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has
    provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider
    (insta.meghani@gmail.com) so that they will be able to take the necessary actions.</p>
</div>
<hr><strong>Information Collection and Use</strong>
<p>The Application collects information when you download and use it. This information may include information such as</p>
<ul>
<li>Your device's Internet Protocol address (e.g. IP address)</li>
<li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
<li>The time spent on the Application</li>
<li>The operating system you use on your mobile device</li>
</ul>

<hr><strong>Security</strong>
<p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
<hr><strong>Changes</strong>
<p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly
for any changes, as continued use is deemed approval of all changes.</p>
<hr>
<p>This privacy policy is effective as of 2024-06-22</p>
<hr><strong>Your Consent</strong>
<p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
<hr><strong>Contact Us</strong>
<p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at insta.meghani@gmail.com.</p>
    
`;





export default function Buttons() {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openPlayStore}>
          <Text style={styles.buttonText}>Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openInstagramProfile}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    height: 50,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
    flexDirection: 'row',
  },


  button: {
    borderRadius: 10,
    padding: 5,
    height: 50,
    backgroundColor: 'blue',
    width: '30%',
    justifyContent: 'center',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign : 'center'
  },





})