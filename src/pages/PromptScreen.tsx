import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

const PromptScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [responses, setResponses] = useState<{ [key: string]: string }>({
    'First prompt': '',
    'Second prompt': '',
    'Third prompt': '',
  });
  const [activePrompt, setActivePrompt] = useState<string | null>(null);

  const prompts = ['First prompt', 'Second prompt', 'Third prompt'];

  const handleOpenModal = (prompt: string) => {
    setActivePrompt(prompt);
    setCurrentPrompt(responses[prompt] || '');
    setModalVisible(true);
  };

  const handleSaveResponse = () => {
    if (activePrompt) {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [activePrompt]: currentPrompt,
      }));
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProgressBar progress={100} />

        <Text style={styles.titleText}>What’s it like to date you?</Text>
        <Text style={styles.subtitleText}>
          A joy, obviously but go ahead and answer in your own words.
        </Text>

        {prompts.map((prompt) => (
          <TouchableOpacity
            key={prompt}
            style={styles.promptContainer}
            onPress={() => handleOpenModal(prompt)}
          >
            <Text style={styles.promptText}>
              {responses[prompt] || prompt}
            </Text>
            <Text style={styles.addButtonText}>
              {responses[prompt] ? 'Edit' : 'Add'}
            </Text>
          </TouchableOpacity>
        ))}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{activePrompt}</Text>
              <TextInput
                style={styles.input}
                value={currentPrompt}
                onChangeText={setCurrentPrompt}
                placeholder="Type your response here..."
                placeholderTextColor="#888"
                multiline
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveResponse}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation?.navigate('Onboarding1')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>
            {Object.values(responses).filter(Boolean).length}/3 Added
          </Text>
          <BoardingButton
            onPress={() => navigation?.navigate('ConnectInstragramScreen')}
            disabled={Object.values(responses).filter(Boolean).length < 3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  promptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#65D1D1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 8,
    width: '100%',
  },
  promptText: {
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
  addButtonText: {
    fontSize: 16,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    color: '#000',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#4DC7F8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#555',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 18,
    color: '#000',
  },
  countText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PromptScreen;
