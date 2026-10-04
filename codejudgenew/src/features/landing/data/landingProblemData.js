export const landingProblemData = {
  id: 1,
  title: '1. Two Sum',
  difficulty: 'Easy',
  category: 'Arrays',
  breadcrumb: ['Problems', 'Arrays'],
  stats: {
    solvedCount: 142,
    contestRating: 1567,
    globalRank: '#2,341',
  },
  communityCount: '50,000+',
  avatars: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80',
  ],
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
  example1: {
    input: 'nums = [2,7,11,15], target = 9',
    output: '[0,1]',
    explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
  },
  example2: {
    input: 'nums = [3,2,4], target = 6',
    output: '[1,2]',
    explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
  },
  code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            if target - num in seen:
                return [seen[target - num], i]
            seen[num] = i`,
  testCases: [
    {
      id: 1,
      name: 'Test Case 1',
      input: 'nums = [2,7,11,15], target = 9',
      status: 'Accepted',
      runtime: '2 ms',
      memory: '14.2 MB',
      fasterThan: '94.8%',
    },
    {
      id: 2,
      name: 'Test Case 2',
      input: 'nums = [3,2,4], target = 6',
      status: 'Accepted',
      runtime: '1 ms',
      memory: '13.9 MB',
      fasterThan: '98.2%',
    },
  ],
};
