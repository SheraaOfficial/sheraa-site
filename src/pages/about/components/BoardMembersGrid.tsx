
import React from 'react';
import { BoardMemberCard } from './BoardMemberCard';
import { boardMembers, sectorColors } from './boardData';

export const BoardMembersGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {boardMembers.map((member, index) => (
        <BoardMemberCard
          key={member.name}
          member={member}
          index={index}
          sectorColors={sectorColors}
        />
      ))}
    </div>
  );
};
