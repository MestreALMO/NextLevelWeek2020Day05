import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Teachers availables" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={20} color='#fff' />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && ( 
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="What subject?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Week day</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="What day?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="What time?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.TeacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;