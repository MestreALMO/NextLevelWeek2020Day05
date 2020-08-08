import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style = {styles.name}>Diego Fernandes</Text>
                    <Text style = {styles.subject}>Chimestry</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Enthusiastic of the bestests technologys of advanced chemistry.
                {'\n'}{'\n'}
                In love with making things explode in laboratorys.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/hour {'   '}
                    <Text style={styles.priceValue}>
                        $ 20,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Get in contact</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;