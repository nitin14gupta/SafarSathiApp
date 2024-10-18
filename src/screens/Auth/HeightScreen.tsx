import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const HeightScreen = ({navigation}) => {
  const [selectedHeight, setSelectedHeight] = useState(null);
  const heights = [
    '120 cm',
    '121 cm',
    '122 cm',
    '123 cm',
    '124 cm',
    '125 cm',
    '126 cm',
    '127 cm',
    '128 cm',
    '129 cm',
    '130 cm',
    '131 cm',
    '132 cm',
    '133 cm',
    '134 cm',
    '135 cm',
    '136 cm',
    '137 cm',
    '138 cm',
    '139 cm',
    '140 cm',
    '141 cm',
    '142 cm',
    '143 cm',
    '144 cm',
    '145 cm',
    '146 cm',
    '147 cm',
    '148 cm',
    '149 cm',
    '150 cm',
    '151 cm',
    '152 cm',
    '153 cm',
    '154 cm',
    '155 cm',
    '156 cm',
    '157 cm',
    '158 cm',
    '159 cm',
    '160 cm',
    '161 cm',
    '162 cm',
    '163 cm',
    '164 cm',
    '165 cm',
    '166 cm',
    '167 cm',
    '168 cm',
    '169 cm',
    '170 cm',
    '171 cm',
    '172 cm',
    '173 cm',
    '174 cm',
    '175 cm',
    '176 cm',
    '177 cm',
    '178 cm',
    '179 cm',
    '180 cm',
    '181 cm',
    '182 cm',
    '183 cm',
    '184 cm',
    '185 cm',
    '186 cm',
    '187 cm',
    '188 cm',
    '189 cm',
    '190 cm',
    '191 cm',
    '192 cm',
    '193 cm',
    '194 cm',
    '195 cm',
    '196 cm',
    '197 cm',
    '198 cm',
    '199 cm',
    '200 cm',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who would you like to meet?</Text>
      <Text style={styles.subtitle}>
        Let’s get the small talk out of the way. We’ll get into the deep and
        meaningful later.
      </Text>
      <Text style={styles.label}>Your height?</Text>
      <FlatList
        data={heights}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.heightButton,
              selectedHeight === item && styles.selectedButton,
            ]}
            onPress={() => setSelectedHeight(item)}>
            <Text style={styles.heightText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
      <TouchableOpacity style={styles.nextButton}
      onPress={() => navigation.navigate('InterestSelectionScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  heightButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#4DD0E1', // Highlight color
  },
  heightText: {
    fontSize: 18,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4DD0E1',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HeightScreen;
