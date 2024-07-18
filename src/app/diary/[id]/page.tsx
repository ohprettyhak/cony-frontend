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
        오늘 저녁, 나는 잠시 시간을 내어 자기 성찰의 시간을 가졌다. 요즘 바쁜
        일상에 쫓기다 보니 내 마음의 소리를 듣는 것을 소홀히 했다는 걸 깨달았다.
        먼저, 최근 내 행동들을 돌아보았다. 일에 대한 스트레스로 가족들에게
        짜증을 내는 경우가 많았던 것 같다. 이는 내가 개선해야 할 부분이다.
        가족은 내 삶의 중심이며, 그들에게 더 친절하고 이해심 있게 대해야겠다.
        또한, 내 꿈과 목표에 대해 생각해 보았다. 작가가 되고 싶다는 오랜 꿈을
        위해 무엇을 하고 있는지 돌아보니, 최근 글쓰기를 게을리한 것이
        떠올랐다.&nbsp;
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: milestone ? 1 : 0.5, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={milestone ? 'milestone' : ''}
        >
          앞으로는 매일 조금씩 이라도 글을 쓰는 습관을 들여야겠다.
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
        마지막으로, 내가 감사해야 할 것들을 떠올려 보았다. 건강, 사랑하는 가족,
        안정된 직장 등 많은 것들이 있었다. 이런 것들을 당연하게 여기지 말고 더
        감사히 여겨야겠다.&nbsp;
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="suggest"
        >
          짧은 성찰의 시간이 내게 큰 깨달음을 주었다.
        </motion.span>
      </p>
      <Suggest suggest="어떤 깨달음을 얻었는지 조금 더 생각해보면 어떨까요?" />

      <p className={styles.diaryContent}>
        앞으로는 정기적으로 이런 시간을 가져야겠다. 나 자신을 더 잘 이해하고 더
        나은 사람이 되기 위해 노력할 것이다.
      </p>

      <div className={sprinkles({ paddingTop: 'xxxl' })} />
    </Layout>
  );
}
