'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactElement, useState } from 'react';

import CalendarTodayIcon from '@/assets/icons/calendar_today.svg';
import ClearDayIcon from '@/assets/icons/clear_day.svg';
import CloseIcon from '@/assets/icons/close.svg';
import NearMeIcon from '@/assets/icons/near_me.svg';
import ChipLabel from '@/components/ChipLabel';
import Layout from '@/components/layouts/Layout';
import { sprinkles } from '@/styles/sprinkles.css';

import MilestoneRecommend from './_components/MilestoneRecommend';
import Suggest from './_components/Suggest';
import * as styles from './page.css';

export default function Page(): ReactElement {
  const router = useRouter();

  const [milestone, setMilestone] = useState<boolean>(true);

  return (
    <Layout bgColor="#F1EED0">
      <div className={styles.coverImageContainer}>
        <Image
          src="/images/cover.jpg"
          alt="diary cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority={true}
          draggable={false}
        />
        <div className={styles.coverTopGradient} />
        <div className={styles.coverTopGradient} />

        <div className={styles.coverBottomGradient} />
        <div className={styles.coverBottomGradient} />

        <div className={styles.coverButtonContainer}>
          <button className={styles.coverButton} onClick={() => router.back()}>
            <CloseIcon width={24} height={24} />
          </button>
        </div>
      </div>

      <h2 className={styles.diaryTitle}>자기 성찰의 시간</h2>

      <div
        className={sprinkles({
          layout: 'columnCenterX',
          marginTop: 'md',
          marginBottom: 'xl',
          gap: 'sm',
        })}
      >
        <div className={sprinkles({ layout: 'centerX', gap: 'sm' })}>
          <ChipLabel icon={<CalendarTodayIcon />} label="7월 18일" />
          <ChipLabel icon={<ClearDayIcon />} label="맑음, 27℃" />
        </div>
        <ChipLabel icon={<NearMeIcon />} label="영통구 영통동" />
      </div>

      <p className={styles.diaryContent}>
        오늘은 회사에서 의미있는 하루를 보냈다. 최근 힘들어하던 동료에게 응원의 말을 건네며 자신감을 되찾도록 북돋아주었다. 작은 행동이었지만 그 친구가 의욕을 되찾는 모습을 보니 뿌듯했다.&nbsp;
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: milestone ? 1 : 0.5, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={milestone ? 'milestone' : ''}
        >
          앞으로도 주변 사람들에게 따뜻한 관심과 격려를 아끼지 말아야겠다.
        </motion.span>
      </p>

      <AnimatePresence>
        {milestone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <MilestoneRecommend
              buttonTitle="매일 글 쓰는 습관 만들기"
              onClick={() => setMilestone(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <p className={styles.diaryContent}>
        한편, 나 자신도 업무 효율을 높이기 위해 노력 중이다. To-do 리스트를 활용해 중요도에 따라 일을 처리하고, 불필요한 낭비 요소는 제거하고 있다. 덕분에 요즘은 일찍 퇴근할 수 있는 날이 많아졌다. 퇴근 후 여유로운 저녁 시간을 갖게 되어 삶의 질도 높아지는 것 같다.&nbsp;
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="suggest"
        >
          균형 잡힌 삶을 위해 앞으로도 계속 노력해야지!
        </motion.span>
      </p>
      <Suggest suggest="어떤 노력을 할 수 있는지 더 생각해보는 것은 어떨까요??" />

      <p className={styles.diaryContent}>
        오늘의 교훈: "작은 실천이 모여 큰 변화를 만든다."
      </p>

      <div className={sprinkles({ paddingTop: 'xxxl' })} />
    </Layout>
  );
}
