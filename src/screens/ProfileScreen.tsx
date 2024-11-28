import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const reviews = [
  { id: '1', user: 'Jane Doe', review: 'Amazing app! Totally loved it.', date: 'Nov 20, 2024' },
  { id: '2', user: 'Mike Ross', review: 'User-friendly and intuitive design.', date: 'Nov 18, 2024' },
];

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with profile image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.nameText}>John Karter</Text>
        <View style={styles.userDetails}>
          <Text style={styles.detailText}>Male</Text>
          <Icon name="location-sharp" size={14} color="#000" />
          <Text style={styles.detailText}>India</Text>
        </View>
        <TouchableOpacity style={styles.premiumButton}>
          <Icon name="crown" size={20} color="#FFD700" />
          <Text style={styles.premiumText}>Get Premium Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Options Section */}
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.option}>
          <Icon name="person-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Your Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="card-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="settings-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="help-circle-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="person-add-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="lock-closed-outline" size={20} color="#007aff" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Write Review Section */}
      <View style={styles.reviewSection}>
        <Text style={styles.sectionTitle}>Write a Review</Text>
        <TextInput
          style={styles.reviewInput}
          placeholder="Write your review here..."
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Past Reviews Section */}
      <View style={styles.pastReviewsSection}>
        <Text style={styles.sectionTitle}>Past Reviews</Text>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.reviewCard}>
              <Text style={styles.reviewUser}>{item.user}</Text>
              <Text style={styles.reviewDate}>{item.date}</Text>
              <Text style={styles.reviewText}>{item.review}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#E8F6FF',
    borderRadius: 10,
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#E8F6FF',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  editText: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#000',
  },
  premiumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 16,
  },
  premiumText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },
  optionsSection: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  reviewSection: {
    marginTop: 24,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 12,
    backgroundColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pastReviewsSection: {
    marginTop: 24,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
  },
  reviewCard: {
    marginBottom: 16,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#000',
  },
});

export default ProfileScreen;
